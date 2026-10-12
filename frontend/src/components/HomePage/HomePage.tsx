import { Container } from "../../shared/components/Container";
import { Categories } from "./components/Categories";
import { Intro } from "./components/Intro";
import { ProductsSlider } from "./components/ProductsSlider";
import { useAppSelector } from "../../app/hooks";
import {
    selectDiscountedProducts,
    selectNewestProducts,
} from "../../features/products/selectors";
import { SliderSkeleton } from "../../shared/ui/Skeletons";
import { Reveal } from "../../shared/ui/Reveal";
import { ErrorMessage } from "../../shared/ui/ErrorMessage";

export const HomePage: React.FC = () => {
    const { isLoading, hasError } = useAppSelector((state) => state.products);

    const newestProducts = useAppSelector(selectNewestProducts);
    const hotPrices = useAppSelector(selectDiscountedProducts);

    return (
        <>
            <Reveal>
                <Intro />
            </Reveal>

            {isLoading && <SliderSkeleton />}

            {hasError ? (
                <Container>
                    <ErrorMessage />
                </Container>
            ) : (
                <Reveal>
                    <ProductsSlider
                        title="Brand new models"
                        products={newestProducts}
                        showOldPrice={false}
                    />
                </Reveal>
            )}

            <Reveal>
                <Container>
                    <Categories />
                </Container>
            </Reveal>

            {isLoading && <SliderSkeleton />}

            {hasError ? (
                <Container>
                    <ErrorMessage />
                </Container>
            ) : (
                <Reveal>
                    <ProductsSlider
                        title="Hot Prices"
                        products={hotPrices}
                        showOldPrice={true}
                    />
                </Reveal>
            )}
        </>
    );
};
