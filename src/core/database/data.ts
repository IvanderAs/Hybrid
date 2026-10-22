import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('vaultexpense.db');

export function initializeDatabase() {
  db.execSync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      merchant TEXT NOT NULL,
      amount REAL NOT NULL,
      category TEXT NOT NULL,
      confidence TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      receipt_image_uri TEXT
    );
  `);
}

export function getTransactions() {
  // Retrieves all transactions to display in the Ledger/History screen
  return db.getAllSync('SELECT * FROM transactions ORDER BY timestamp DESC;');
}

// The single, correct addTransaction function that accepts the image URI
export function addTransaction(merchant: string, amount: number, category: string, confidence: string, imageUri: string = '') {
  db.runSync(
    'INSERT INTO transactions (merchant, amount, category, confidence, receipt_image_uri) VALUES (?, ?, ?, ?, ?);',
    [merchant, amount, category, confidence, imageUri]
  );
}

export function getTotalMonthlySpend(): number {
  const result: any = db.getFirstSync(
    `SELECT SUM(amount) as total FROM transactions WHERE strftime('%Y-%m', timestamp) = strftime('%Y-%m', 'now');`
  );
  return result?.total || 0;
}