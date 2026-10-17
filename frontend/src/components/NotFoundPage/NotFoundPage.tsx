import React from "react";

import styles from "./NotFoundPage.module.scss";
import { Container } from "../../shared/components/Container";
import { Typography } from "../../shared/ui/Typography";

export const NotFoundPage: React.FC = () => {
    // const { t } = useTranslation();

    return (
        <Container>
            <Typography variant="h1" className={styles.title}>
                Page not found
            </Typography>
        </Container>
    );
};
