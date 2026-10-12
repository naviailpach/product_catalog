import type React from "react";

import styles from "./ArrowBtn.module.scss";
import Arrow from "@assets/images/icons/arrow.svg?react";
import classNames from "classnames";

type Props = {
    direction: "prev" | "next";
    onClick: () => void;
    disabled?: boolean;
    className?: string;
};

export const ArrowBtn: React.FC<Props> = ({
    direction,
    onClick,
    disabled,
    className,
}) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={classNames(styles.arrowBtn, className)}
    >
        <Arrow
            className={classNames(styles.arrowBtnImg, {
                [styles.arrowBtnImgLeft]: direction === "prev",
            })}
        />
    </button>
);
