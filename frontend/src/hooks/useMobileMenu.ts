import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useMobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const [prevPathname, setPrevPathname] = useState(pathname);

    if (pathname !== prevPathname) {
        setPrevPathname(pathname);
        setIsMenuOpen(false);
    }

    useEffect(() => {
        document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [isMenuOpen]);

    return { isMenuOpen, setIsMenuOpen };
};
