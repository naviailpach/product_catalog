import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";
import { getProducts } from "../../api/productService";

export const fetchProducts = createAsyncThunk("products/fetch", () =>
    getProducts(),
);

type ProductsState = {
    items: Product[];
    isLoading: boolean;
    hasError: boolean;
};

const initialState: ProductsState = {
    items: [],
    isLoading: false,
    hasError: false,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        });

        builder.addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
        });
    },
});

export const productsReducer = productsSlice.reducer;
