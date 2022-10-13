import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  port: 8889,
  database: 'assoc_db',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

export default db;