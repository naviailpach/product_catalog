import { HashRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./components/HomePage";
import { Provider } from "react-redux";
import store from "./app/store";
import { SkeletonProvider } from "./providers/SkeletonProvider";
import { Reveal } from "./shared/ui/Reveal";

export const Root = () => (
    <Provider store={store}>
        <HashRouter>
            <SkeletonProvider>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Reveal>
                                <App />
                            </Reveal>
                        }
                    >
                        <Route index element={<HomePage />} />
                    </Route>
                </Routes>
            </SkeletonProvider>
        </HashRouter>
    </Provider>
);
