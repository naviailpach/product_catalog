import type { Product } from "../../../../types/Product";

export const getSpecsCard = (product: Product) => [
    {
        translationKey: "Screen",
        value: product.screen,
    },

    {
        translationKey: "Capacity",
        value: product.capacity,
    },

    {
        translationKey: "RAM",
        value: product.ram,
    },
];
