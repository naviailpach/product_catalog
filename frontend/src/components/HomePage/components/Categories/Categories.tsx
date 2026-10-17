import type React from "react";

import styles from "./Categories.module.scss";
import { Typography } from "../../../../shared/ui/Typography";
import { CATEGORIES_CARDS } from "./constants/categoriesCards";
import { CategoryCard } from "./CategoryCard";
import type { Product } from "../../../../types/Product";

type Props = {
    products: Product[];
};

export const Categories: React.FC<Props> = ({ products }) => {
    return (
        <section className={styles.categories}>
            <Typography variant="h2" className={styles.categoriesTitle}>
                Shop by category
            </Typography>

            <div className={styles.categoriesInner}>
                {CATEGORIES_CARDS.map((card) => (
                    <CategoryCard
                        key={card.title}
                        card={card}
                        count={
                            products.filter((p) => p.category === card.category)
                                .length
                        }
                    />
                ))}
            </div>
        </section>
    );
};
