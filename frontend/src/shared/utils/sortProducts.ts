import type { Product } from "../../types/Product";

export const getNewProducts = (products: Product[], limit = 10): Product[] =>
    [...products].sort((a, b) => b.year - a.year).slice(0, limit);

const getDiscount = (p: Product): number =>
    (p.full_price - p.price) / p.full_price;

export const getDiscountedProducts = (products: Product[]): Product[] =>
    products
        .filter((p) => p.price < p.full_price)
        .sort((a, b) => getDiscount(b) - getDiscount(a))
        .slice(0, 10);

export const sortProducts = (
    products: Product[],
    sortBy: string,
): Product[] => {
    const items = [...products];

    switch (sortBy) {
        case "title":
            return items.sort((a, b) => a.name.localeCompare(b.name));

        case "price":
            return items.sort((a, b) => a.price - b.price);

        default:
        case "age":
            return items.sort((a, b) => b.year - a.year);
    }
};
