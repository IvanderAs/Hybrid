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

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
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
  const existing = db.getFirstSync<{ id: number }>(
    'SELECT id FROM users WHERE username = $username LIMIT 1;',
    { $username: normalizedUsername }
  );

  if (existing) {
    throw new Error('USERNAME_EXISTS');
  }

  const salt = await Crypto.getRandomBytesAsync(16);
  const hash = await scryptAsync(pin, salt, SCRYPT_PARAMETERS);

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
    // The database's UNIQUE constraint also protects against a duplicate
    // username being registered between the initial check and this insert.
    if (String(error).toLowerCase().includes('unique constraint failed')) {
      throw new Error('USERNAME_EXISTS');
    }

    throw error;
  }
}
