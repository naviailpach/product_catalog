import type React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";
import Logo from "@assets/images/logo/logo.svg?react";
import { Container } from "../Container";
import { FooterNav } from "./FooterNav";
import { ButtonToTop } from "./ButtonToTop";

export const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <Container>
            <div className={styles.footerContent}>
                <Link to="/" className={styles.footerLogoLink}>
                    <Logo className={styles.footerLogo} />
                </Link>

                <FooterNav />

                <div className={styles.footerBtn}>
                    Back to top
                    <ButtonToTop />
                </div>
            </div>
        </Container>
    </footer>
);
