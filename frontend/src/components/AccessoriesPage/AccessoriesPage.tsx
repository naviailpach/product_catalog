import type React from "react";
import { Container } from "../../shared/components/Container";
import { ProductsPage } from "../ProductsPage";
import { CATEGORY_CONFIG } from "../../shared/constants/categoryConfig";

export const AccessoriesPage: React.FC = () => (
    <Container>
        <ProductsPage
            currentCategory="accessories"
            title={CATEGORY_CONFIG.accessories.title}
            breadcrumb={CATEGORY_CONFIG.accessories.breadcrumb}
        />
    </Container>
);
