import { useCallback, useEffect, useRef, useState } from "react";

export const useScrollSlider = () => {
    const trackRef = useRef<HTMLDivElement>(null);

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateScrollState = useCallback(() => {
        const track = trackRef.current;

        if (!track) {
            return;
        }

        const maxScrollLeft = track.scrollWidth - track.clientWidth;

        setCanScrollPrev(track.scrollLeft > 0);
        setCanScrollNext(track.scrollLeft < maxScrollLeft - 1);
    }, []);

    const scroll = useCallback((direction: 1 | -1) => {
        const track = trackRef.current;
        const firstCard = track?.firstElementChild as HTMLElement | null;

        if (!track || !firstCard) return;

        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.gap) || 0;
        const cardStep = firstCard.offsetWidth + gap;

        const isDesktop = styles.overflowX === "hidden";

        const cardsPerStep = isDesktop
            ? Math.max(1, Math.round((track.clientWidth + gap) / cardStep))
            : 1;

        track.scrollBy({
            left: direction * cardsPerStep * cardStep,
            behavior: "smooth",
        });
    }, []);

    const prevSlide = useCallback(() => scroll(-1), [scroll]);
    const nextSlide = useCallback(() => scroll(1), [scroll]);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        updateScrollState();

        const observer = new ResizeObserver(updateScrollState);
        observer.observe(track);

        track.addEventListener("scroll", updateScrollState);

        return () => {
            track.removeEventListener("scroll", updateScrollState);
            observer.disconnect();
        };
    }, [updateScrollState]);

    return { trackRef, prevSlide, nextSlide, canScrollPrev, canScrollNext };
};
