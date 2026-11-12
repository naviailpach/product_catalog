import type React from "react";

import styles from "./PriceActions.module.scss";
import { Button } from "../../../../shared/ui/Button";
import { FavouriteButton } from "../../../../shared/ui/FavouriteButton";
import { useFavourite } from "../../../../hooks/useFavourite";
import type { Product } from "../../../../types/Product";
import { useCart } from "../../../../hooks/useCart";

type Props = {
    price: number;
    priceFull: number;
    product: Product;
};

export const PriceActions: React.FC<Props> = ({
    price,
    priceFull,
    product,
}) => {
    const { isFavourite, toggleFavourite } = useFavourite(product);
    const { isCart, toggleCart } = useCart(product);

    return (
        <div className={styles.priceActions}>
            <div className={styles.prices}>
                <div className={styles.pricesDiscount}>{`$${price}`}</div>
                <div className={styles.pricesOld}>{`$${priceFull}`}</div>
            </div>

            <div className={styles.buttons}>
                <Button
                    isActive={isCart}
                    onClick={toggleCart}
                    className={styles.buttonsToCart}
                >
                    Add to cart
                </Button>

                <FavouriteButton
                    isActive={isFavourite}
                    onClick={toggleFavourite}
                    className={styles.buttonsToFavourite}
                />
            </div>
        </div>
    );
};
