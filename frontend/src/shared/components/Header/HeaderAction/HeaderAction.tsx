import type React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./HeaderAction.module.scss";

type Props = {
    to: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    isMobile?: boolean;
};

export const HeaderAction: React.FC<Props> = ({
    to,
    Icon,
    isMobile = false,
}) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            classNames(styles.link, {
                [styles.isActive]: isActive,
                [styles.linkMobile]: isMobile,
            })
        }
    >
        <Icon className={styles.icon} />
    </NavLink>
);
