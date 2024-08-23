import pg from 'pg'
import { DB_DATABASE, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD } from './config.js'

export const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT
})