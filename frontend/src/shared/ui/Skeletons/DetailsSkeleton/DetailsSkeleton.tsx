import type React from "react";
import Skeleton from "react-loading-skeleton";

import styles from "./DetailsSkeleton.module.scss";
import { SkeletonFadeIn } from "../../SkeletonFadeIn";

const THUMBNAILS_COUNT = 5;
const COLORS_COUNT = 3;
const CAPACITY_COUNT = 3;
const SPECS_COUNT = 4;
const SECTION_COUNT = 3;
const FULLSPECS_COUNT = 8;

export const DetailsSkeleton: React.FC = () => (
    <SkeletonFadeIn>
        <div className={styles.pageTop}>
            <div className={styles.pageTopNav}>
                <Skeleton width={16} height={16} />

                <Skeleton width={16} height={16} />

                <Skeleton width={45} height={16} />

                <Skeleton width={16} height={16} />

                <Skeleton className={styles.pageTopProductName} />
            </div>

            <div className={styles.pageTopBackNav}>
                <Skeleton width={16} height={16} />

                <Skeleton width={31} height={16} />
            </div>

            <Skeleton className={styles.pageTopTitle} />
        </div>

        <div className={styles.details}>
            <div className={styles.gallery}>
                <div className={styles.galleryMain}>
                    <Skeleton className={styles.galleryMainSkeleton} />
                </div>

                <div className={styles.galleryThumbnails}>
                    {Array.from({ length: THUMBNAILS_COUNT }).map(
                        (_, index) => (
                            <div
                                key={index}
                                className={styles.galleryThumbnail}
                            >
                                <Skeleton
                                    className={styles.galleryThumbnailSkeleton}
                                />
                            </div>
                        ),
                    )}
                </div>
            </div>

            <div className={styles.detailsControlls}>
                <div className={styles.detailsWrapper}>
                    <div className={styles.colors}>
                        <Skeleton className={styles.colorsTitle} />

                        <div className={styles.colorsList}>
                            {Array.from({ length: COLORS_COUNT }).map(
                                (_, index) => (
                                    <Skeleton
                                        key={index}
                                        className={styles.colorsOption}
                                    />
                                ),
                            )}
                        </div>
                    </div>

                    <Skeleton className={styles.detailsProductId} />
                </div>

                <Skeleton height={1} />

                <div className={styles.capacity}>
                    <Skeleton className={styles.capacityTitle} />

                    <div className={styles.capacityList}>
                        {Array.from({ length: CAPACITY_COUNT }).map(
                            (_, index) => (
                                <Skeleton
                                    key={index}
                                    className={styles.capacityOption}
                                />
                            ),
                        )}
                    </div>
                </div>

                <Skeleton height={1} />

                <div className={styles.detailsPriceActions}>
                    <div className={styles.detailsPrices}>
                        <Skeleton width={72} height={41} />

                        <Skeleton width={52} height={28} />
                    </div>

                    <div className={styles.detailsButtons}>
                        <div className={styles.detailsButtonMain}>
                            <Skeleton height={48} />
                        </div>

                        <div className={styles.detailsButtonFavourite}>
                            <Skeleton
                                height={48}
                                className={styles.detailsFavourite}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.detailsSpecs}>
                    {Array.from({ length: SPECS_COUNT }).map((_, index) => (
                        <div key={index} className={styles.detailsSpecsRow}>
                            <Skeleton className={styles.detailsSpecTitle} />
                            <Skeleton className={styles.detailsSpecValue} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.detailsAbout}>
                <Skeleton className={styles.detailsAboutTitle} />

                <Skeleton height={1} />

                <div className={styles.detailsAboutWrapper}>
                    {Array.from({ length: SECTION_COUNT }).map((_, index) => (
                        <div key={index}>
                            <Skeleton className={styles.detailsSectionTitle} />

                            <Skeleton className={styles.detailsSectionText} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.fullSpecs}>
                <Skeleton className={styles.fullSpecsTitleTop} />

                <Skeleton height={1} />

                <div className={styles.fullSpecsWrapper}>
                    {Array.from({ length: FULLSPECS_COUNT }).map((_, index) => (
                        <div key={index} className={styles.fullSpecsRow}>
                            <Skeleton className={styles.fullSpecsTitle} />

                            <Skeleton className={styles.fullSpecsValue} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </SkeletonFadeIn>
);
