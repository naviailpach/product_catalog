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

export const Root = () => (
    <Provider store={store}>
        <HashRouter>
            <SkeletonProvider>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<HomePage />} />
                        <Route path="phones" element={<PhonesPage />} />
                        <Route path="tablets" element={<TabletsPage />} />
                        <Route
                            path="accessories"
                            element={<AccessoriesPage />}
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </SkeletonProvider>
        </HashRouter>
    </Provider>
);
