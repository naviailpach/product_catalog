import type React from "react";
import Skeleton from "react-loading-skeleton";

import styles from "./SliderSkeleton.module.scss";
import { CardSkeleton } from "./CardSkeleton";
import { SkeletonFadeIn } from "../SkeletonFadeIn";

const CARD_COUNT = 4;

export const SliderSkeleton: React.FC = () => (
    <SkeletonFadeIn>
        <div className={styles.productsWrapper}>
            <div className={styles.products}>
                <div className={styles.productsTop}>
                    <div className={styles.productsTitle}>
                        <Skeleton height="100%" />
                    </div>

                    <div className={styles.productsButtons}>
                        <Skeleton
                            width={32}
                            height={32}
                            className={styles.productsBtn}
                        />

                        <Skeleton
                            width={32}
                            height={32}
                            className={styles.productsBtn}
                        />
                    </div>
                </div>

                <div className={styles.productsCards}>
                    {Array.from({ length: CARD_COUNT }).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </div>
    </SkeletonFadeIn>
);
