import { Link } from "react-router-dom";
import type React from "react";

import styles from "./Header.module.scss";
import Logo from "@assets/images/logo/logo.svg?react";
import BurgerMenu from "@assets/images/menu/burger-menu.svg?react";
import CloseMenu from "@assets/images/menu/close-menu.svg?react";
import { Nav } from "../Nav";
import { HeaderAction } from "./HeaderAction";
import Favourite from "@assets/images/icons/favourites.svg?react";
import Cart from "@assets/images/icons/shopping-cart.svg?react";

type Props = {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLeftSide}>
                    <Link to="/" className={styles.headerLogoLink}>
                        <Logo className={styles.headerLogo} />
                    </Link>

                    <Nav />
                </div>

                <div className={styles.headerRightSide}>
                    <button
                        className={styles.headerMenuBtn}
                        onClick={() => setIsMenuOpen((current) => !current)}
                    >
                        {isMenuOpen ? (
                            <CloseMenu className={styles.headerIconMenu} />
                        ) : (
                            <BurgerMenu className={styles.headerIconMenu} />
                        )}
                    </button>

                    <HeaderAction to="/favourites" Icon={Favourite} />

                    <HeaderAction to="/cart" Icon={Cart} />
                </div>
            </div>
        </header>
    );
};
