import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {
    getDiscountedProducts,
    getNewProducts,
} from "../../shared/utils/sortProducts";

export const selectProducts = (state: RootState) => state.products.items;

export const selectNewestProducts = createSelector([selectProducts], (items) =>
    getNewProducts(items),
);

export const selectDiscountedProducts = createSelector(
    [selectProducts],
    (items) => getDiscountedProducts(items),
);
