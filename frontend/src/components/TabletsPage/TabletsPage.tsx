import type React from "react";
import { Container } from "../../shared/components/Container";
import { ProductsPage } from "../ProductsPage";
import { CATEGORY_CONFIG } from "../../shared/constants/categoryConfig";

export const TabletsPage: React.FC = () => (
    <Container>
        <ProductsPage
            currentCategory="tablets"
            title={CATEGORY_CONFIG.tablets.title}
            breadcrumb={CATEGORY_CONFIG.tablets.title}
        />
    </Container>
);
