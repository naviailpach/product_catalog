import type React from "react";
import { Link } from "react-router-dom";

import styles from "./CategoryCard.module.scss";
import { Typography } from "../../../../../shared/ui/Typography";

type Props = {
    title: string;
    count: number;
    image: string;
    link: string;
};

export const CategoryCard: React.FC<Props> = ({
    title,
    count,
    image,
    link,
}) => {
    return (
        <article className={styles.category}>
            <Link to={link} className={styles.categoryImgWrapper}>
                <img src={image} alt={title} className={styles.categoryImg} />
            </Link>

            <Link to={link} className={styles.categoryTitleWrapper}>
                <Typography variant="h4" className={styles.categoryTitle}>
                    {title}
                </Typography>
            </Link>

            <p className={styles.categoryCount}>{count} models</p>
        </article>
    );
};
