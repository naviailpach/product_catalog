import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductDetails } from "../../api/productService";
import type { ProductDetails } from "../../types/ProductDetails";

export const fetchProductDetails = createAsyncThunk<ProductDetails, number>(
    "productDetails/fetch",
    async (productId) => {
        const result = getProductDetails(productId);

        return result;
    },
);

type DetailsState = {
    item: ProductDetails | null;
    isLoading: boolean;
    hasError: boolean;
};

const initialState: DetailsState = {
    item: null,
    isLoading: false,
    hasError: false,
};

export const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductDetails.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
            state.item = null;
        });

        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.item = action.payload;
            state.isLoading = false;
        });

        builder.addCase(fetchProductDetails.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
        });
    },
});

export const productDetailsReducer = productDetailsSlice.reducer;
