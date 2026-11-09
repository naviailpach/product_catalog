import type { RootState } from "../../app/store";

export const selectFavouriteItems = (state: RootState) =>
    state.favourites.items;

export const selectIsFavourite = (state: RootState, itemId: string) =>
    selectFavouriteItems(state).some((item) => item.itemId === itemId);
