import type { Product } from "../types/Product";
import { get } from "./httpClient";

export const getProducts = () => get<Product[]>("/products");
