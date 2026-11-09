import type { Product } from "../types/Product";

export const saveFavourites = (items: Product[]) => {
    localStorage.setItem("favourites", JSON.stringify(items));
};

export const loadFavourites = (): Product[] => {
    try {
        const saved = localStorage.getItem("favourites");

        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};
