import type { Product } from "../types/Product";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIsCart } from "../features/cart/selectors";
import { actions } from "../features/cart";

export const useCart = (product: Product) => {
    const dispatch = useAppDispatch();

    const isCart = useAppSelector((state) =>
        selectIsCart(state, product.itemId),
    );

    const toggleCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        dispatch(actions.toggleItem(product));
    };

    return { isCart, toggleCart };
};
