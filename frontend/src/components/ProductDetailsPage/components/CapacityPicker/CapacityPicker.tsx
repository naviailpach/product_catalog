import type React from "react";
import classNames from "classnames";

import styles from "./CapacityPicker.module.scss";

type Props = {
    capacities: string[];
    activeCapacity: string;
    onChange: (capacity: string) => void;
};

export const CapacityPicker: React.FC<Props> = ({
    capacities,
    activeCapacity,
    onChange,
}) => {
    return (
        <div className={styles.capacity}>
            <div className={styles.capacityTitle}>Select capacity</div>

            <div className={styles.capacityList}>
                {capacities.map((capacity) => (
                    <button
                        key={capacity}
                        onClick={() => onChange(capacity)}
                        className={classNames(styles.capacityOption, {
                            [styles.capacityActive]:
                                capacity === activeCapacity,
                        })}
                    >
                        {capacity}
                    </button>
                ))}
            </div>
        </div>
    );
};
