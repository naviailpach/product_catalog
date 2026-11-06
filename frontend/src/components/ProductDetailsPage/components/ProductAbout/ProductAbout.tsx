import type React from "react";

import styles from "./ProductAbout.module.scss";
import { Typography } from "../../../../shared/ui/Typography";
import { Divider } from "../../../../shared/ui/Divider";
import type { DescriptionProduct } from "../../../../types/ProductDetails";

type Props = {
    description: DescriptionProduct[];
};

export const ProductAbout: React.FC<Props> = ({ description }) => {
    return (
        <div className={styles.about}>
            <Typography variant="h3" className={styles.aboutTitle}>
                About
            </Typography>

            <Divider />

            <div className={styles.aboutWrapper}>
                {description.map((section) => (
                    <div key={section.title}>
                        <Typography
                            variant="h4"
                            className={styles.aboutSectionTitle}
                        >
                            {section.title}
                        </Typography>

                        <p className={styles.aboutText}>{section.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
