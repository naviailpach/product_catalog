import type React from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./ProductsPage.module.scss";
import { PageTop } from "../../shared/ui/PageTop";
import type { Category } from "../../shared/constants/categoryConfig";
import { Dropdown } from "./components/Dropdown";
import { useAppSelector } from "../../app/hooks";
import { ProductCard } from "../../shared/ui/ProductCard";
import { Reveal } from "../../shared/ui/Reveal";
import { PER_PAGE_OPTIONS, SORT_OPTIONS } from "./constants/sortOption";
import { selectProductsByCategory } from "../../features/products/selectors";
import { sortProducts } from "../../shared/utils/sortProducts";
import { Pagination } from "./components/Pagination";
import { usePagination } from "./hooks/usePagination";
import { ProductsSkeleton } from "../../shared/ui/Skeletons/ProductsSkeleton";
import { ErrorMessage } from "../../shared/ui/ErrorMessage";

type Props = {
    currentCategory: Category;
    title: string;
    breadcrumb: string;
};

export const ProductsPage: React.FC<Props> = ({
    currentCategory,
    title,
    breadcrumb,
}) => {
    const { isLoading, hasError } = useAppSelector((state) => state.products);
    const items = useAppSelector((state) =>
        selectProductsByCategory(state, currentCategory),
    );

    const [searchParams, setSearchParams] = useSearchParams();

    const sort = searchParams.get("sort") || "age";
    const perPage = searchParams.get("perPage") || "all";

    const handleSortChange = (value: string) => {
        const params = new URLSearchParams(searchParams);

        params.set("sort", value);
        setSearchParams(params);
    };

    const handlePerPageChange = (value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value === "all") {
            params.delete("perPage");
        } else {
            params.set("perPage", value);
        }

        setSearchParams(params);
    };

    const sortedProducts = sortProducts(items, sort);

    const getItemsPerPage = () => {
        if (perPage !== "all") {
            return +perPage;
        }

        return sortedProducts.length;
    };

    const {
        currentPage,
        totalPages,
        prevPage,
        nextPage,
        goToPage,
        startIndex,
        endIndex,
        firstPage,
        lastPage,
    } = usePagination(sortedProducts.length, getItemsPerPage());

    const visibleItems = sortedProducts.slice(startIndex, endIndex);

    return (
        <div className={styles.productsPage}>
            <Reveal className={styles.productsPageTop}>
                <PageTop
                    title={title}
                    breadcrumb={[{ name: breadcrumb }]}
                    subtitle={`${visibleItems.length} models`}
                />
            </Reveal>

            <Dropdown
                title={"Sort by"}
                value={sort}
                options={SORT_OPTIONS}
                onChange={handleSortChange}
                className={styles.productsPageFilterSort}
            />

            <Dropdown
                title={"Items on page"}
                value={perPage}
                options={PER_PAGE_OPTIONS}
                onChange={handlePerPageChange}
                className={styles.productsPageFilterItemsOnPage}
            />

            {isLoading && <ProductsSkeleton />}

            {hasError && <ErrorMessage />}

            {!isLoading && !hasError && (
                <div className={styles.productsPageList}>
                    {visibleItems.map((item) => (
                        <Reveal key={item.id}>
                            <ProductCard
                                product={item}
                                showOldPrice={true}
                                className={styles.productsPageCard}
                            />
                        </Reveal>
                    ))}
                </div>
            )}

            {visibleItems.length > 0 && (
                <div className={styles.productsPagePagination}>
                    {perPage !== "all" && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={goToPage}
                            nextPage={nextPage}
                            prevPage={prevPage}
                            firstPage={firstPage}
                            lastPage={lastPage}
                        />
                    )}
                </div>
            )}
        </div>
    );
};
