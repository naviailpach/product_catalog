import { getAllProducts } from "../services/product.service.js";

export async function getProducts(req, res) {
    const products = await getAllProducts();

    res.json(products);
}
