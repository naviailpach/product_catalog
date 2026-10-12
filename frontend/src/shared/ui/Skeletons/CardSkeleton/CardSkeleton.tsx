import type React from "react";
import Skeleton from "react-loading-skeleton";

import styles from "./CardSkeleton.module.scss";
import ImgSkeleton from "@assets/images/icons/img-skeleton.svg?react";
import { SkeletonFadeIn } from "../../SkeletonFadeIn";

export const CardSkeleton: React.FC = () => (
    <SkeletonFadeIn>
        <div className={styles.card}>
            <div className={styles.cardImgWrapper}>
                <Skeleton className={styles.cardImage} />

                <ImgSkeleton className={styles.cardImgSkeleton} />
            </div>

            <Skeleton className={styles.cardTitle} />

            <div className={styles.cardPrices}>
                <Skeleton width={50} height={31} />

                <Skeleton width={50} height={31} />
            </div>

            <Skeleton height={1} />

            <div className={styles.cardInfo}>
                <div className={styles.cardInfoRow}>
                    <Skeleton width={43} height={15} />

                    <Skeleton width={54} height={15} />
                </div>

                <div className={styles.cardInfoRow}>
                    <Skeleton width={57} height={15} />

                    <Skeleton width={38} height={15} />
                </div>

                <div className={styles.cardInfoRow}>
                    <Skeleton width={28} height={15} />

                    <Skeleton width={28} height={15} />
                </div>
            </div>

            <div className={styles.cardButtons}>
                <div className={styles.cardBtn}>
                    <Skeleton height={40} />
                </div>

                <div className={styles.cardBtnFavourite}>
                    <Skeleton height={40} className={styles.cardFavourite} />
                </div>
            </div>
        </div>
    </SkeletonFadeIn>
);
