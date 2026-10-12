import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { logger } from "./middleware/logger.middleware.js";
import productRoutes from "./routes/product.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/images", express.static(path.join(__dirname, "../public/images")));
app.use("/api/products", productRoutes);

export default app;
