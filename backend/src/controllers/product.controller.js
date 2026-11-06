import {
    getAllProducts,
    getDetailsByProductId,
    getRecommendedProducts,
} from "../services/product.service.js";

export async function getProducts(req, res) {
    const products = await getAllProducts();

    res.json(products);
}

export async function getProductDetails(req, res) {
    try {
        const productDetails = await getDetailsByProductId(
            req.params.productId,
        );

        if (!productDetails) {
            return res.status(404).json({
                message: "Product details not found",
            });
        }

        res.json(productDetails);
    } catch (error) {
        res.status(500).json({
            message: "Failed to get product details",
        });
    }
}

export async function getRecommendations(req, res) {
    const productId = Number(req.params.productId);

    if (!Number.isInteger(productId) || productId <= 0) {
        return res.status(404).json({
            message: "Invalid product ID",
        });
    }

    try {
        const products = await getRecommendedProducts(productId);

        return res.json(products);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to get recommended products",
        });
    }
}
