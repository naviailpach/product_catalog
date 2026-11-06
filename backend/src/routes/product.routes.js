import express from "express";
import {
    getProductDetails,
    getProducts,
    getRecommendations,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:productId/recommendations", getRecommendations);
router.get("/:productId", getProductDetails);

export default router;
