import type React from "react";

import styles from "./FullSpecs.module.scss";
import type { getFullSpecs } from "../../constants/getProductSpecs";
import { Typography } from "../../../../shared/ui/Typography";
import { Divider } from "../../../../shared/ui/Divider";

type Props = {
    specs: ReturnType<typeof getFullSpecs>;
};

export const FullSpecs: React.FC<Props> = ({ specs }) => (
    <div className={styles.specs}>
        <Typography variant="h3" className={styles.specsTitleTop}>
            Tech specs
        </Typography>

        <Divider />

        <div className={styles.specsWrapper}>
            {specs.map((spec) => (
                <div key={spec.translationKey} className={styles.specsRow}>
                    <div className={styles.specsTitle}>
                        {spec.translationKey}
                    </div>
                    <div className={styles.specsValue}>{spec.value}</div>
                </div>
            ))}
        </div>
    </div>
);
