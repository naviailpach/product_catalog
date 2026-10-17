import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {
    getDiscountedProducts,
    getNewProducts,
} from "../../shared/utils/sortProducts";
import type { Category } from "../../shared/constants/categoryConfig";

export const selectProducts = (state: RootState) => state.products.items;

export const selectNewestProducts = createSelector([selectProducts], (items) =>
    getNewProducts(items),
);

export const selectDiscountedProducts = createSelector(
    [selectProducts],
    (items) => getDiscountedProducts(items),
);

export const selectProductsByCategory = createSelector(
    [selectProducts, (_state: RootState, category: Category) => category],
    (items, category) => items.filter((item) => item.category === category),
);
