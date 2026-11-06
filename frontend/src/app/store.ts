import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features/products";
import { productDetailsReducer } from "../features/ProductsDetails/ProductDetails";

const store = configureStore({
    reducer: {
        products: productsReducer,
        productDetails: productDetailsReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
