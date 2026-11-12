import type { CartProduct } from "../features/cart";

export const saveCart = (items: CartProduct[]) => {
    localStorage.setItem("cart", JSON.stringify(items));
};

export const loadCart = (): CartProduct[] => {
    try {
        const saved = localStorage.getItem("cart");

        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};
