import type React from "react";
import classNames from "classnames";

import styles from "./PicturesSlider.module.scss";
import { useEffect, useRef } from "react";
import { SLIDERS } from "../../constants/sliders";
import { ArrowBtn } from "../../../../shared/components/ArrowBtn";
import { useSlider } from "../../../../hooks/useSlider";
import { Link } from "react-router-dom";

const SWIPE_THRESHOLD = 50;
const AUTOPLAY_DELAY = 5000;

export const PicturesSlider: React.FC = () => {
    const { currentSlide, setCurrentSlide, prevSlide, nextSlide } = useSlider();

    const touchStart = useRef(0);
    const touchEnd = useRef(0);

    const handleTouchStart = (event: React.TouchEvent) => {
        touchStart.current = event.changedTouches[0].clientX;
    };

    const handleTouchEnd = (event: React.TouchEvent) => {
        touchEnd.current = event.changedTouches[0].clientX;

        const distance = touchStart.current - touchEnd.current;

        if (distance > SWIPE_THRESHOLD) {
            nextSlide();
        }

        if (distance < -SWIPE_THRESHOLD) {
            prevSlide();
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            nextSlide();
        }, AUTOPLAY_DELAY);

        return () => clearTimeout(timeout);
    }, [currentSlide, nextSlide]);

    return (
        <>
            <div className={styles.sliderWrapper}>
                <div className={styles.slider}>
                    <ArrowBtn
                        direction="prev"
                        onClick={prevSlide}
                        className={classNames(
                            styles.sliderBtn,
                            styles.sliderBtnLeft,
                        )}
                    />

                    <div
                        className={styles.viewport}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className={styles.track}
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {SLIDERS.map((slide) => (
                                <Link
                                    to={"/phones"}
                                    key={slide.id}
                                    className={styles.slide}
                                >
                                    <picture>
                                        <source
                                            media="(min-width: 640px)"
                                            srcSet={slide.slideDesktop}
                                        />

                                        <img
                                            src={slide.slideMobile}
                                            alt={`Slide ${slide.id}`}
                                            className={styles.slideImage}
                                        />
                                    </picture>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <ArrowBtn
                        direction="next"
                        onClick={nextSlide}
                        className={classNames(
                            styles.sliderBtn,
                            styles.sliderBtnRight,
                        )}
                    />
                </div>
            </div>

            <div
                className={styles.indicators}
                style={
                    {
                        "--duration": `${AUTOPLAY_DELAY}ms`,
                    } as React.CSSProperties
                }
            >
                {SLIDERS.map((slide, index) => (
                    <button
                        key={slide.id}
                        className={classNames(styles.indicatorsBtn, {
                            [styles.active]: index === currentSlide,
                        })}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </>
    );
};
