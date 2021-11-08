require('dotenv').config();
const {
  PG_HOST,
  PG_USER,
  PG_PASS,
  PG_PORT
} = process.env;
const { Pool } = require('pg');

const db = new Pool({
  user: PG_USER, 
  password: PG_PASS, 
  host: PG_HOST, 
  database: PG_DB_NAME, 
  port: PG_PORT
})

module.exports = db;