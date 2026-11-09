import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features/products";
import { productDetailsReducer } from "../features/ProductsDetails/ProductDetails";
import { favouritesReducer } from "../features/favourites";
import { loadFavourites, saveFavourites } from "../storage/favouritesStorage";

const preloadedState = {
    favourites: {
        items: loadFavourites(),
    },
};

const store = configureStore({
    reducer: {
        products: productsReducer,
        productDetails: productDetailsReducer,
        favourites: favouritesReducer,
    },
    preloadedState,
});

let prevItems = store.getState().favourites.items;

store.subscribe(() => {
    const items = store.getState().favourites.items;

    if (prevItems !== items) {
        prevItems = items;

        saveFavourites(items);
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
