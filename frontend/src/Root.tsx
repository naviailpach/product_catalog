import { HashRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./components/HomePage";
import { Provider } from "react-redux";
import store from "./app/store";
import { SkeletonProvider } from "./providers/SkeletonProvider";
import { PhonesPage } from "./components/PhonesPage";
import { TabletsPage } from "./components/TabletsPage";
import { AccessoriesPage } from "./components/AccessoriesPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { ProductDetailsPage } from "./components/ProductDetailsPage";
import { ScrollToTop } from "./shared/components/ScrollToTop";
import { FavouritesPage } from "./components/FavouritesPage";

export const Root = () => (
    <Provider store={store}>
        <HashRouter>
            <SkeletonProvider>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<HomePage />} />
                        <Route path="phones" element={<PhonesPage />} />
                        <Route path="tablets" element={<TabletsPage />} />
                        <Route
                            path="accessories"
                            element={<AccessoriesPage />}
                        />
                        <Route
                            path="product/:itemId"
                            element={<ProductDetailsPage />}
                        />
                        <Route path="favourites" element={<FavouritesPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </SkeletonProvider>
        </HashRouter>
    </Provider>
);
