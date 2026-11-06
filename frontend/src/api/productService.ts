import type { Product } from "../types/Product";
import type { ProductDetails } from "../types/ProductDetails";
import { get } from "./httpClient";

export const getProducts = () => get<Product[]>("/products");

export const getProductDetails = (productId: number) =>
    get<ProductDetails>(`/products/${productId}`);

export const getRecommendedProducts = (productId: number) =>
    get<Product[]>(`/products/${productId}/recommendations`);
