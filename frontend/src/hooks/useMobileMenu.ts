import { useEffect, useState } from "react";

export const useMobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [isMenuOpen]);

    return { isMenuOpen, setIsMenuOpen };
};
