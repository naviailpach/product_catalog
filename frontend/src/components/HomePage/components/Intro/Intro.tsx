import type React from "react";

import styles from "./Intro.module.scss";
import { Typography } from "../../../../shared/ui/Typography";
import { Container } from "../../../../shared/components/Container";
import { PicturesSlider } from "../PicturesSlider";

export const Intro: React.FC = () => (
    <section className={styles.intro}>
        <Container>
            <Typography variant="h1" className={styles.introTitle}>
                Welcome to Nice Gadgets store!
            </Typography>

            <PicturesSlider />
        </Container>
    </section>
);
