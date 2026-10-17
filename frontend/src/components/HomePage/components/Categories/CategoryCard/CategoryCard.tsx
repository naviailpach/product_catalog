import type React from "react";
import { Link } from "react-router-dom";

import styles from "./CategoryCard.module.scss";
import { Typography } from "../../../../../shared/ui/Typography";
import type { CategoryItem } from "../constants/categoriesCards";

type Props = {
    card: CategoryItem;
    count: number;
};

export const CategoryCard: React.FC<Props> = ({ card, count }) => {
    return (
        <article className={styles.category}>
            <Link to={card.link} className={styles.categoryImgWrapper}>
                <img
                    src={card.image}
                    alt={card.title}
                    className={styles.categoryImg}
                />
            </Link>

            <Link to={card.link} className={styles.categoryTitleWrapper}>
                <Typography variant="h4" className={styles.categoryTitle}>
                    {card.title}
                </Typography>
            </Link>

            <p className={styles.categoryCount}>{`${count} models`}</p>
        </article>
    );
};
