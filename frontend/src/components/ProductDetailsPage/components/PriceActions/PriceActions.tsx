import type React from "react";

import styles from "./PriceActions.module.scss";
import { Button } from "../../../../shared/ui/Button";
import { FavouriteButton } from "../../../../shared/ui/FavouriteButton";

type Props = {
    price: number;
    priceFull: number;
};

export const PriceActions: React.FC<Props> = ({ price, priceFull }) => {
    return (
        <div className={styles.priceActions}>
            <div className={styles.prices}>
                <div className={styles.pricesDiscount}>{`$${price}`}</div>
                <div className={styles.pricesOld}>{`$${priceFull}`}</div>
            </div>

            <div className={styles.buttons}>
                <Button className={styles.buttonsToCart}>Add to cart</Button>

                <FavouriteButton className={styles.buttonsToFavourite} />
            </div>
        </div>
    );
};
