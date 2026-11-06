import type React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import styles from "./ProductDetailsPage.module.scss";
import { Container } from "../../shared/components/Container";
import { PageTop } from "../../shared/ui/PageTop";
import { Reveal } from "../../shared/ui/Reveal";
import { ImageGallery } from "./components/ImageGallery";
import { ColorPicker } from "./components/ColorPicker";
import { Divider } from "../../shared/ui/Divider";
import { CapacityPicker } from "./components/CapacityPicker";
import { PriceActions } from "./components/PriceActions";
import { getFullSpecs, getSpecs } from "./constants/getProductSpecs";
import { ProductSpecs } from "./components/ProductSpecs";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProductDetails } from "../../features/ProductsDetails";
import { CATEGORY_CONFIG } from "../../shared/constants/categoryConfig";
import { ProductAbout } from "./components/ProductAbout";
import { FullSpecs } from "./components/FullSpecs";
import { ProductsSlider } from "../HomePage/components/ProductsSlider";
import { getRecommendedProducts } from "../../api/productService";
import { DetailsSkeleton } from "../../shared/ui/Skeletons/DetailsSkeleton";
import { ErrorMessage } from "../../shared/ui/ErrorMessage";

export const ProductDetailsPage: React.FC = () => {
    const { itemId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const product = useAppSelector((state) =>
        state.products.items.find((p) => p.itemId === itemId),
    );

    const products = useAppSelector((state) => state.products.items);

    const [recommendedProducts, setRecommendedProducts] = useState<
        typeof products
    >([]);

    const {
        item: details,
        isLoading,
        hasError,
    } = useAppSelector((state) => state.productDetails);

    const variants = useMemo(() => {
        if (!product || !details) {
            return [];
        }

        return products.filter(
            (item) =>
                item.category === product.category &&
                item.itemId.startsWith(`${details.namespaceId}-`),
        );
    }, [details, product, products]);

    useEffect(() => {
        if (!product) {
            return;
        }

        const promise = dispatch(fetchProductDetails(product.id));

        return () => promise.abort();
    }, [dispatch, product]);

    useEffect(() => {
        if (!product) {
            return;
        }

        getRecommendedProducts(product.id)
            .then(setRecommendedProducts)
            .catch((error) => {
                console.error("Failed to load recommendations:", error);
                setRecommendedProducts([]);
            });
    }, [product]);

    if (hasError) {
        return (
            <Container>
                <ErrorMessage />
            </Container>
        );
    }

    if (isLoading || !product || !details) {
        return (
            <Container>
                <DetailsSkeleton />
            </Container>
        );
    }

    const handleColorChange = (color: string) => {
        const variant = variants.find(
            (item) =>
                item.color === color && item.capacity === product.capacity,
        );

        if (variant) {
            navigate(`/product/${variant.itemId}`);
        }
    };

    const normalizeCapacity = (capacity: string) =>
        capacity.replace(/\s+/g, "").toLowerCase();

    const handleCapacityChange = (capacity: string) => {
        const variant = variants.find(
            (item) =>
                item.color === product.color &&
                normalizeCapacity(item.capacity) ===
                    normalizeCapacity(capacity),
        );

        if (variant) {
            navigate(`/product/${variant.itemId}`);
        }
    };

    const specsProduct = getSpecs(product, details);
    const fullSpecs = getFullSpecs(product, details);
    const currentCategory = CATEGORY_CONFIG[product.category];

    return (
        <>
            <Container>
                <Reveal>
                    <PageTop
                        title={product.name}
                        breadcrumb={[
                            {
                                name: currentCategory.breadcrumb,
                                href: currentCategory.href,
                            },

                            { name: product.name },
                        ]}
                        showBack
                    />
                </Reveal>

                <div className={styles.productDetails}>
                    <Reveal className={styles.productDetailsGallery}>
                        <ImageGallery images={details.images} />
                    </Reveal>

                    <Reveal className={styles.productDetailsControlls}>
                        <ColorPicker
                            colors={details.colorsAvailable}
                            activeColor={product.color}
                            onChange={handleColorChange}
                        />

                        <div
                            className={styles.productDetailsId}
                        >{`ID: ${product.id}`}</div>

                        <Divider />

                        <CapacityPicker
                            capacities={details.capacityAvailable}
                            activeCapacity={product.capacity}
                            onChange={handleCapacityChange}
                        />

                        <Divider />

                        <PriceActions
                            price={product.price}
                            priceFull={product.fullPrice}
                        />

                        <ProductSpecs specs={specsProduct} />
                    </Reveal>

                    <Reveal className={styles.productDetailsDescription}>
                        <ProductAbout description={details.description} />
                    </Reveal>

                    <Reveal className={styles.productDetailsSpecs}>
                        <FullSpecs specs={fullSpecs} />
                    </Reveal>
                </div>
            </Container>

            <Reveal>
                <ProductsSlider
                    title="You may also like"
                    products={recommendedProducts}
                    showOldPrice
                />
            </Reveal>
        </>
    );
};
