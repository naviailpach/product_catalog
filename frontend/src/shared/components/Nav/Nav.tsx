import type React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";
import { NAV_ITEMS } from "./constants/itemsNav";

type Props = {
    isMobile?: boolean;
};

export const Nav: React.FC<Props> = ({ isMobile = false }) => {
    return (
        <nav
            className={classNames(styles.nav, {
                [styles.navMobile]: isMobile,
            })}
        >
            <ul
                className={classNames(styles.navList, {
                    [styles.navMobileList]: isMobile,
                })}
            >
                {NAV_ITEMS.map((item) => (
                    <li key={item.to} className={styles.navItem}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                classNames(styles.navLink, {
                                    [styles.isActive]: isActive,
                                    [styles.navMobileLink]: isMobile,
                                })
                            }
                        >
                            {item.translationKey}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
