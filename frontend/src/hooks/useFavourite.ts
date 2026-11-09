import { useAppDispatch, useAppSelector } from "../app/hooks";
import { actions } from "../features/favourites";
import { selectIsFavourite } from "../features/favourites/selectors";
import type { Product } from "../types/Product";

export const useFavourite = (product: Product) => {
    const dispatch = useAppDispatch();

    const isFavourite = useAppSelector((state) =>
        selectIsFavourite(state, product.itemId),
    );

    const toggleFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        dispatch(actions.toggleItem(product));
    };

    return { isFavourite, toggleFavourite };
};
