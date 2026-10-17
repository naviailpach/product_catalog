import { useEffect, useState } from "react";

export const useMobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [isMenuOpen]);

    return { isMenuOpen, setIsMenuOpen, closeMenu };
};
