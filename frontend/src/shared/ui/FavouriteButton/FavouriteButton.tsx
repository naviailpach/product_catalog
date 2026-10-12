import type React from "react";
import classNames from "classnames";

import styles from "./FavouriteButton.module.scss";
import Favourite from "../../../assets/images/icons/favourites.svg?react";

type Props = {
    onClick: (e: React.MouseEvent) => void;
    className?: string;
};

export const FavouriteButton: React.FC<Props> = ({ onClick, className }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(styles.favouriteBtn, className)}
        >
            <Favourite className={styles.favouriteIcon} />
        </button>
    );
};
