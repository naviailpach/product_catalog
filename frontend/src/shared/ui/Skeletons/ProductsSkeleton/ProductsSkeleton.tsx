import type React from "react";

import styles from "./ProductsSkeleton.module.scss";
import { CardSkeleton } from "../CardSkeleton";

export const ProductsSkeleton: React.FC = () => (
    <div className={styles.productsList}>
        {Array.from({ length: 4 }).map((_, index) => (
            <CardSkeleton key={index} className={styles.productsCard} />
        ))}
    </div>
);
