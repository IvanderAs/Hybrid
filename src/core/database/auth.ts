import * as Crypto from 'expo-crypto';
import * as SQLite from 'expo-sqlite';
import { scryptAsync } from '@noble/hashes/scrypt.js';

const db = SQLite.openDatabaseSync('vaultexpense.db');

const SCRYPT_PARAMETERS = {
  N: 2 ** 14,
  r: 8,
  p: 1,
  dkLen: 32,
};

const USERNAME_PATTERN = /^[A-Za-z0-9._-]{3,24}$/;
const PIN_PATTERN = /^\d{6,12}$/;

type StoredUser = {
  pin_hash: string;
  pin_salt: string;
  pin_kdf: string;
  pin_kdf_params: string;
};

function pinToBytes(pin: string): Uint8Array {
  // PINs are digits only, so encode each ASCII digit without relying on TextEncoder.
  return Uint8Array.from(pin, (character) => character.charCodeAt(0));
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function hexToBytes(hex: string): Uint8Array {
  if (hex.length % 2 !== 0 || !/^[0-9a-f]+$/i.test(hex)) {
    throw new Error('INVALID_STORED_HEX');
  }

  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i += 1) {
    bytes[i] = Number.parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}

function constantTimeEqual(left: Uint8Array, right: Uint8Array): boolean {
  if (left.length !== right.length) {
    return false;
  }

  let difference = 0;
  for (let i = 0; i < left.length; i += 1) {
    difference |= left[i] ^ right[i];
  }
  return difference === 0;
}

export function initializeAuthDatabase(): void {
  db.execSync(
    'CREATE TABLE IF NOT EXISTS users (' +
      'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      'username TEXT NOT NULL COLLATE NOCASE UNIQUE, ' +
      'pin_hash TEXT NOT NULL, ' +
      'pin_salt TEXT NOT NULL, ' +
      "pin_kdf TEXT NOT NULL DEFAULT 'scrypt', " +
      'pin_kdf_params TEXT NOT NULL, ' +
      'created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP' +
      ');'
  );
}

export function hasAnyLocalAccount(): boolean {
  initializeAuthDatabase();
  const row = db.getFirstSync<{ id: number }>('SELECT id FROM users LIMIT 1;');
  return row !== null;
}

export async function registerLocalAccount(
  username: string,
  pin: string
): Promise<void> {
  initializeAuthDatabase();

  const normalizedUsername = username.trim();

  if (!USERNAME_PATTERN.test(normalizedUsername)) {
    throw new Error('INVALID_USERNAME');
  }

  if (!PIN_PATTERN.test(pin)) {
    throw new Error('INVALID_PIN');
  }

  const existing = db.getFirstSync<{ id: number }>(
    'SELECT id FROM users WHERE username = $username LIMIT 1;',
    { $username: normalizedUsername }
  );

  if (existing) {
    throw new Error('USERNAME_EXISTS');
  }

  const salt = await Crypto.getRandomBytesAsync(16);
  const hash = await scryptAsync(pinToBytes(pin), salt, SCRYPT_PARAMETERS);

  try {
    db.runSync(
      'INSERT INTO users (username, pin_hash, pin_salt, pin_kdf, pin_kdf_params) ' +
        'VALUES ($username, $pinHash, $pinSalt, $pinKdf, $pinKdfParams);',
      {
        $username: normalizedUsername,
        $pinHash: bytesToHex(hash),
        $pinSalt: bytesToHex(salt),
        $pinKdf: 'scrypt',
        $pinKdfParams: JSON.stringify(SCRYPT_PARAMETERS),
      }
    );
  } catch (error) {
    // The UNIQUE constraint also protects against concurrent duplicate attempts.
    if (String(error).toLowerCase().includes('unique constraint failed')) {
      throw new Error('USERNAME_EXISTS');
    }

    throw error;
  }
}

/**
 * Returns true only when the local username and PIN match.
 * Login screens should show the same message for unknown usernames and wrong PINs.
 */
export async function verifyLocalAccount(
  username: string,
  pin: string
): Promise<boolean> {
  initializeAuthDatabase();

  const normalizedUsername = username.trim();
  if (!normalizedUsername || !PIN_PATTERN.test(pin)) {
    return false;
  }

  const user = db.getFirstSync<StoredUser>(
    'SELECT pin_hash, pin_salt, pin_kdf, pin_kdf_params ' +
      'FROM users WHERE username = $username LIMIT 1;',
    { $username: normalizedUsername }
  );

  if (!user || user.pin_kdf !== 'scrypt') {
    return false;
  }

  try {
    const savedParameters = JSON.parse(user.pin_kdf_params) as typeof SCRYPT_PARAMETERS;

    // Reject unexpected parameters rather than allowing modified database values
    // to request an excessive amount of CPU or memory.
    if (
      savedParameters.N !== SCRYPT_PARAMETERS.N ||
      savedParameters.r !== SCRYPT_PARAMETERS.r ||
      savedParameters.p !== SCRYPT_PARAMETERS.p ||
      savedParameters.dkLen !== SCRYPT_PARAMETERS.dkLen
    ) {
      return false;
    }

    const salt = hexToBytes(user.pin_salt);
    const expectedHash = hexToBytes(user.pin_hash);
    if (salt.length !== 16 || expectedHash.length !== SCRYPT_PARAMETERS.dkLen) {
      return false;
    }

    const actualHash = await scryptAsync(pinToBytes(pin), salt, savedParameters);
    return constantTimeEqual(actualHash, expectedHash);
  } catch {
    // A malformed or corrupted account record should not crash the login UI.
    return false;
  }
}
