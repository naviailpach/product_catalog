import pool from "../db/db.js";

export async function getAllProducts() {
    const result = await pool.query(
        `SELECT *
        FROM products`,
    );

    return result.rows;
}
