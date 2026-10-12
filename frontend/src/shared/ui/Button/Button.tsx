import type React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

type Props = {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
};

export const Button: React.FC<Props> = ({ children, onClick, className }) => (
    <button
        type="button"
        onClick={onClick}
        className={classNames(styles.button, className)}
    >
        {children}
    </button>
);
