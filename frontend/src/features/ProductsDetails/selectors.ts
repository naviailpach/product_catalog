import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export const selectProductDetails = (state: RootState) => state.products.items;

export const selectProductById = createSelector(
    [selectProductDetails, (_state: RootState, itemId: string) => itemId],
    (items, itemId) => items.filter((item) => item.itemId === itemId),
);
