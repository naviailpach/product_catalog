import type React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./HeaderAction.module.scss";

type Props = {
    to: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    count?: number;
    isMobile?: boolean;
};

export const HeaderAction: React.FC<Props> = ({
    to,
    Icon,
    count,
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

        {count && count > 0 ? (
            <span
                className={classNames(styles.badgeCount, {
                    [styles.badgeCountMobile]: isMobile,
                })}
            >
                {count}
            </span>
        ) : null}
    </NavLink>
);
