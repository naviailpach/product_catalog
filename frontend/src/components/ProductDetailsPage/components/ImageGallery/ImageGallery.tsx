import type React from "react";

import styles from "./ImageGallery.module.scss";
import { useRef, useState } from "react";
import classNames from "classnames";
import { API_URL } from "../../../../shared/utils/config";

type Props = {
    images: string[];
};

export const ImageGallery: React.FC<Props> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.touches[0].clientX;
        touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null || touchStartY.current === null) {
            return;
        }

        const deltaX = event.changedTouches[0].clientX - touchStartX.current;
        const deltaY = event.changedTouches[0].clientY - touchStartY.current;

        const minSwipeDistance = 50;

        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            return;
        }

        if (Math.abs(deltaX) < minSwipeDistance) {
            return;
        }

        if (deltaX < 0) {
            setActiveIndex((current) =>
                Math.min(current + 1, images.length - 1),
            );
        } else {
            setActiveIndex((current) => Math.max(current - 1, 0));
        }

        touchStartX.current = null;
        touchStartY.current = null;
    };

    return (
        <div className={styles.gallery}>
            <div
                className={styles.galleryMainImage}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((image, index) => (
                    <img
                        key={image}
                        src={`${API_URL}${image}`}
                        alt="image product"
                        className={classNames(styles.galleryImage, {
                            [styles.galleryImageActive]: index === activeIndex,
                        })}
                        draggable={false}
                        aria-hidden={index !== activeIndex}
                    />
                ))}
            </div>

            <div className={styles.thumbnails}>
                {images.map((image, index) => (
                    <button
                        key={image}
                        className={classNames(styles.thumbnail, {
                            [styles.thumbnailActive]: index === activeIndex,
                        })}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Показати фото ${index + 1}`}
                        aria-pressed={index === activeIndex}
                    >
                        <img
                            src={`${API_URL}${image}`}
                            alt="thumbnail"
                            className={styles.thumbnailImage}
                            draggable={false}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};
