import type React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import styles from "./ProductCard.module.scss";
import { Typography } from "../Typography";
import { Divider } from "../Divider";
import { Button } from "../Button";
import { FavouriteButton } from "../FavouriteButton";

import type { Product } from "../../../types/Product";
import { API_URL } from "../../utils/config";

type Props = {
    product: Product;
    showOldPrice?: boolean;
    className?: string;
};

export const ProductCard: React.FC<Props> = ({
    product,
    showOldPrice,
    className,
}) => {
    const PRODUCT_SPECS = [
        {
            name: "Screen",
            value: product.screen,
        },

        {
            name: "Capacity",
            value: product.capacity,
        },

        {
            name: "RAM",
            value: product.ram,
        },
    ];

    return (
        <article className={classNames(styles.card, className)}>
            <Link to={`/`} className={styles.cardImgWrapper}>
                <img
                    src={`${API_URL}${product.image}`}
                    alt={product.name}
                    className={styles.cardImg}
                />
            </Link>

            <Link to={`/`} className={styles.cardTitle}>
                {product.name}
            </Link>

            <div className={styles.cardPrices}>
                <Typography variant="h3" className={styles.cardPrice}>
                    ${product.price}
                </Typography>

                {showOldPrice && (
                    <span className={styles.cardOldPrice}>
                        ${product.full_price}
                    </span>
                )}
            </div>

            <Divider />

            <div className={styles.cardInfo}>
                {PRODUCT_SPECS.map((spec) => (
                    <div key={spec.name} className={styles.cardInfoRow}>
                        <div className={styles.cardInfoName}>{spec.name}</div>
                        <div className={styles.cardInfoValue}>{spec.value}</div>
                    </div>
                ))}
            </div>

            <div className={styles.cardButtons}>
                <Button>Add to cart</Button>

                <FavouriteButton />
            </div>
        </article>
    );
};
