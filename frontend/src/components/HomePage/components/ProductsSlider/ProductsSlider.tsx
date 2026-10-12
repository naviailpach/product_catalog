import type React from "react";

import styles from "./ProductsSlider.module.scss";
import { Container } from "../../../../shared/components/Container";
import { Typography } from "../../../../shared/ui/Typography";
import { ArrowBtn } from "../../../../shared/components/ArrowBtn";
import { ProductCard } from "../../../../shared/ui/ProductCard";
import { useScrollSlider } from "../../../../hooks/useScrollSlider";
import type { Product } from "../../../../types/Product";
import { Reveal } from "../../../../shared/ui/Reveal";

type Props = {
    title: string;
    products: Product[];
    showOldPrice?: boolean;
};

export const ProductsSlider: React.FC<Props> = ({
    title,
    products,
    showOldPrice,
}) => {
    const { trackRef, prevSlide, nextSlide, canScrollPrev, canScrollNext } =
        useScrollSlider();

    return (
        <section className={styles.products}>
            <Container>
                <div className={styles.productsTop}>
                    <Typography variant="h2" className={styles.productsTitle}>
                        {title}
                    </Typography>

                    <div className={styles.productsButtons}>
                        <ArrowBtn
                            direction="prev"
                            onClick={prevSlide}
                            disabled={!canScrollPrev}
                            className={styles.productsArrowBtn}
                        />
                        <ArrowBtn
                            direction="next"
                            onClick={nextSlide}
                            disabled={!canScrollNext}
                            className={styles.productsArrowBtn}
                        />
                    </div>
                </div>
            </Container>

            <div className={styles.productsWrapper} ref={trackRef}>
                {products.map((product, i) => (
                    <Reveal key={product.id} delay={i * 100}>
                        <ProductCard
                            product={product}
                            showOldPrice={showOldPrice}
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    );
};
