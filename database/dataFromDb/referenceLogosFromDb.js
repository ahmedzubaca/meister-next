import sql from 'better-sqlite3';

const db = sql('logos.db');

export function getLogos() {  
  return db.prepare('SELECT * FROM logos').all();
}