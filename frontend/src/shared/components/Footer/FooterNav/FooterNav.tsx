import type React from "react";
import { NavLink } from "react-router-dom";

import styles from "./FooterNav.module.scss";
import { FOOTER_NAV_ITEMS } from "./constants/footerNavItems";

export const FooterNav: React.FC = () => (
    <nav className={styles.footerNav}>
        <ul className={styles.footerNavList}>
            {FOOTER_NAV_ITEMS.map((item) => (
                <li key={item.name} className={styles.footerNavItem}>
                    <NavLink
                        to={item.href}
                        target="_blank"
                        className={styles.footerNavLink}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);
