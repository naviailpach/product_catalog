import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";

export type CartProduct = {
    product: Product;
    count: number;
};

type CartState = {
    items: CartProduct[];
};

const initialState: CartState = {
    items: [],
};

const findItem = (state: CartState, itemId: string) => {
    return state.items.find((item) => item.product.itemId === itemId);
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleItem: (state, action: PayloadAction<Product>) => {
            const exists = findItem(state, action.payload.itemId);

            if (exists) {
                state.items = state.items.filter(
                    (item) => item.product.itemId !== action.payload.itemId,
                );
            } else {
                state.items.push({ product: action.payload, count: 1 });
            }
        },

        incrementItemCount: (state, action: PayloadAction<Product>) => {
            const item = findItem(state, action.payload.itemId);

            if (item) {
                item.count += 1;
            }
        },

        decrementItemCount: (state, action: PayloadAction<Product>) => {
            const item = findItem(state, action.payload.itemId);

            if (item && item.count > 1) {
                item.count -= 1;
            }
        },

        removeItem: (state, action: PayloadAction<Product>) => {
            state.items = state.items.filter(
                (item) => item.product.itemId !== action.payload.itemId,
            );
        },

        clearCart: () => initialState,
    },
});

export const { actions } = CartSlice;
export const cartReducer = CartSlice.reducer;
