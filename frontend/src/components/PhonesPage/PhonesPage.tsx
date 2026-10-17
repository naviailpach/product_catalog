import type React from "react";
import { Container } from "../../shared/components/Container";
import { ProductsPage } from "../ProductsPage";
import { CATEGORY_CONFIG } from "../../shared/constants/categoryConfig";

export const PhonesPage: React.FC = () => (
    <Container>
        <ProductsPage
            currentCategory="phones"
            title={CATEGORY_CONFIG.phones.title}
            breadcrumb={CATEGORY_CONFIG.phones.breadcrumb}
        />
    </Container>
);
