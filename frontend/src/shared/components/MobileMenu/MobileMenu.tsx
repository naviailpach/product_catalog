import type React from "react";
import classNames from "classnames";

import styles from "./MobileMenu.module.scss";
import { Nav } from "../Nav";
import { HeaderAction } from "../Header/HeaderAction";
import Favourite from "@assets/images/icons/favourites.svg?react";
import Cart from "@assets/images/icons/shopping-cart.svg?react";

type Props = {
    isMenuOpen: boolean;
};

export const MobileMenu: React.FC<Props> = ({ isMenuOpen }) => (
    <div
        className={classNames(styles.menu, {
            [styles.menuOpen]: isMenuOpen,
        })}
    >
        <Nav isMobile />

        <div className={styles.menuFooter}>
            <HeaderAction isMobile to="/favourites" Icon={Favourite} />

            <HeaderAction isMobile to="/cart" Icon={Cart} />
        </div>
    </div>
);
