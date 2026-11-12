import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features/products";
import { productDetailsReducer } from "../features/ProductsDetails/ProductDetails";
import { favouritesReducer } from "../features/favourites";
import { loadFavourites, saveFavourites } from "../storage/favouritesStorage";
import { cartReducer } from "../features/cart/cart";
import { loadCart, saveCart } from "../storage/cartStorage";

const preloadedState = {
    favourites: {
        items: loadFavourites(),
    },

    cart: {
        items: loadCart(),
    },
};

const store = configureStore({
    reducer: {
        products: productsReducer,
        productDetails: productDetailsReducer,
        favourites: favouritesReducer,
        cart: cartReducer,
    },
    preloadedState,
});

let prevItems = store.getState().favourites.items;
let prevCartItems = store.getState().cart.items;

store.subscribe(() => {
    const items = store.getState().favourites.items;
    const cartItems = store.getState().cart.items;

    if (prevItems !== items) {
        prevItems = items;

        saveFavourites(items);
    }

    if (prevCartItems !== cartItems) {
        prevCartItems = cartItems;

        saveCart(cartItems);
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
