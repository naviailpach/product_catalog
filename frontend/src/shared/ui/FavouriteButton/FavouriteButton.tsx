import type React from "react";
import classNames from "classnames";

import styles from "./FavouriteButton.module.scss";
import Favourite from "../../../assets/images/icons/favourites.svg?react";
import FavouriteFilled from "../../../assets/images/icons/favourites-filled.svg?react";

type Props = {
    isActive?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
};

export const FavouriteButton: React.FC<Props> = ({
    isActive,
    onClick,
    className,
}) => {
    const Icon = isActive ? FavouriteFilled : Favourite;

    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(styles.favouriteBtn, className)}
        >
            <Icon className={styles.favouriteIcon} />
        </button>
    );
};
