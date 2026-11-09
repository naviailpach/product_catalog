import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";

type FavouritesState = {
    items: Product[];
};

const initialState: FavouritesState = {
    items: [],
};

export const FavouritesSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        toggleItem: (state, action: PayloadAction<Product>) => {
            const exists = state.items.find(
                (item) => item.itemId === action.payload.itemId,
            );

            if (exists) {
                state.items = state.items.filter(
                    (item) => item.itemId !== action.payload.itemId,
                );
            } else {
                state.items.push(action.payload);
            }
        },
    },
});

export const { actions } = FavouritesSlice;
export const favouritesReducer = FavouritesSlice.reducer;
