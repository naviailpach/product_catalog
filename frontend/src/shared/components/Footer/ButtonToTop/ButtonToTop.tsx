import type React from "react";

import styles from "./ButtonToTop.module.scss";
import ArrowIcon from "@assets/images/icons/arrow.svg?react";

export const ButtonToTop: React.FC = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={styles.buttonToTop}
        >
            <ArrowIcon className={styles.buttonToTopIcon} />
        </button>
    );
};
