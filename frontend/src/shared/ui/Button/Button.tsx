import type React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

type Props = {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isActive?: boolean;
    className?: string;
    disabled?: boolean;
};

export const Button: React.FC<Props> = ({
    children,
    onClick,
    isActive,
    className,
    disabled,
}) => (
    <button
        type="button"
        onClick={onClick}
        className={classNames(
            styles.button,
            { [styles.active]: isActive },
            className,
        )}
        disabled={disabled}
    >
        {children}
    </button>
);
