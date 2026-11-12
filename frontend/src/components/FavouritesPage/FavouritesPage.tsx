import type React from "react";

import styles from "./FavouritesPage.module.scss";
import { Container } from "../../shared/components/Container";
import { PageTop } from "../../shared/ui/PageTop";
import { useAppSelector } from "../../app/hooks";
import { ProductCard } from "../../shared/ui/ProductCard";
import { Typography } from "../../shared/ui/Typography";
import { Reveal } from "../../shared/ui/Reveal";

export const FavouritesPage: React.FC = () => {
    const { items } = useAppSelector((state) => state.favourites);

    return (
        <Container>
            <Reveal>
                <PageTop
                    title="Favourites"
                    breadcrumb={[{ name: "Favourites" }]}
                    subtitle={`${items.length} items`}
                />
            </Reveal>

            {items.length === 0 ? (
                <Reveal className={styles.empty}>
                    <Typography variant="h2">Not favourites yet</Typography>

                    <p className={styles.emptyText}>
                        Click the heart icon next to an item to add it here
                    </p>
                </Reveal>
            ) : (
                <Reveal className={styles.favourites}>
                    <div className={styles.favouritesList}>
                        {items.map((item) => (
                            <ProductCard
                                key={item.id}
                                product={item}
                                className={styles.favouritesCard}
                            />
                        ))}
                    </div>
                </Reveal>
            )}
        </Container>
    );
};
