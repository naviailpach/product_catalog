import { useState } from "react";
import { SLIDERS } from "../components/HomePage/constants/sliders";

export const useSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(
            (current) => (current - 1 + SLIDERS.length) % SLIDERS.length,
        );
    };

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % SLIDERS.length);
    };

    return { currentSlide, setCurrentSlide, prevSlide, nextSlide };
};
