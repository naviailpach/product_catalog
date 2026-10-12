import { Outlet } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

import { useMobileMenu } from "./hooks/useMobileMenu";
import { Header } from "./shared/components/Header";
import { MobileMenu } from "./shared/components/MobileMenu";

import "./styles/globals.scss";
import { Main } from "./shared/components/Main";
import { Footer } from "./shared/components/Footer";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { fetchProducts } from "./features/products";

export const App = () => {
    const { isMenuOpen, setIsMenuOpen } = useMobileMenu();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <MobileMenu isMenuOpen={isMenuOpen} />

            <Main>
                <Outlet />
            </Main>

            <Footer />
        </>
    );
};
