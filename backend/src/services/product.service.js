import pool from "../db/db.js";

const DETAILS_CONFIG = {
    phones: {
        table: "phones_details",
        extraColumns: `
            resolution,
            processor,
            camera,
            zoom,
            cell
        `,
    },

    tablets: {
        table: "tablets_details",
        extraColumns: `
            resolution,
            processor,
            camera,
            zoom
        `,
    },

    accessories: {
        table: "accessories_details",
        extraColumns: `
            resolution,
            processor
        `,
    },
};

export async function getAllProducts() {
    const result = await pool.query(
        `SELECT 
          id,
          category,
          item_id     AS "itemId",
          name,
          full_price  AS "fullPrice",
          price,
          screen,
          capacity,
          color,
          ram,
          year,
          image
        FROM products`,
    );

    return result.rows;
}

export async function getDetailsByProductId(productId) {
    const productResult = await pool.query(
        `SELECT category
         FROM products
         WHERE id = $1`,
        [productId],
    );

    const product = productResult.rows[0];

    if (!product) {
        return null;
    }

    const config = DETAILS_CONFIG[product.category];

    if (!config) {
        throw new Error(`Unsupported product category: ${product.category}`);
    }

    const result = await pool.query(
        `SELECT
          product_id          AS "productId",
          namespace_id        AS "namespaceId",
          capacity_available  AS "capacityAvailable",
          colors_available    AS "colorsAvailable",
          images,
          description,
          ${config.extraColumns}
        FROM ${config.table}
        WHERE product_id = $1`,
        [productId],
    );

    return result.rows[0] ?? null;
}

export async function getRecommendedProducts(productId, limit = 8) {
    const result = await pool.query(
        `SELECT
            recommended.id,
            recommended.category,
            recommended.item_id    AS "itemId",
            recommended.name,
            recommended.full_price AS "fullPrice",
            recommended.price,
            recommended.screen,
            recommended.capacity,
            recommended.color,
            recommended.ram,
            recommended.year,
            recommended.image
        FROM products AS current
        INNER JOIN products AS recommended
            ON recommended.category = current.category
            AND recommended.id <> current.id
        WHERE current.id = $1
        ORDER BY ABS(recommended.price - current.price) ASC,
            recommended.id ASC
        LIMIT $2
    `,
        [productId, limit],
    );

    return result.rows;
}
