import type React from "react";

import styles from "./Categories.module.scss";
import { Typography } from "../../../../shared/ui/Typography";
import { CATEGORIES_CARDS } from "./constants/categoriesCards";
import { CategoryCard } from "./CategoryCard";

export const Categories: React.FC = () => {
    return (
        <section className={styles.categories}>
            <Typography variant="h2" className={styles.categoriesTitle}>
                Shop by category
            </Typography>

            <div className={styles.categoriesInner}>
                {CATEGORIES_CARDS.map((card) => (
                    <CategoryCard
                        key={card.title}
                        title={card.title}
                        count={card.count}
                        image={card.image}
                        link={card.link}
                    />
                ))}
            </div>
        </section>
    );
};
