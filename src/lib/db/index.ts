import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import {
    DB_USER,
    DB_HOST,
    DB_DB,
    DB_PORT,
    DB_PW,
} from "$env/static/private";
import pg from 'pg';
const { Pool } = pg;


const pool = new Pool({
    host: DB_HOST,
    port: parseInt(DB_PORT),
    database: DB_DB,
    user: DB_USER,
    password: DB_PW,
})

export const db = drizzle(pool); 
