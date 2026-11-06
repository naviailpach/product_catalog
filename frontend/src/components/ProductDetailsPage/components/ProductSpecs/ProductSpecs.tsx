import type React from "react";

import styles from "./ProductSpecs.module.scss";
import type { getSpecs } from "../../constants/getProductSpecs";

type Props = {
    specs: ReturnType<typeof getSpecs>;
};

export const ProductSpecs: React.FC<Props> = ({ specs }) => (
    <div className={styles.specs}>
        {specs.map((spec) => (
            <div key={spec.translationKey} className={styles.specsRow}>
                <div className={styles.specsTitle}>{spec.translationKey}</div>
                <div className={styles.specsValue}>{spec.value}</div>
            </div>
        ))}
    </div>
);
