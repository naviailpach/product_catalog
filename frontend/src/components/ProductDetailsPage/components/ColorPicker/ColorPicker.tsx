import type React from "react";
import classNames from "classnames";

import styles from "./ColorPicker.module.scss";
import { getColorLabel, getColorValue } from "./constants/colors";

type Props = {
    colors: string[];
    activeColor: string;
    onChange: (color: string) => void;
};

export const ColorPicker: React.FC<Props> = ({
    colors,
    activeColor,
    onChange,
}) => {
    return (
        <div className={styles.colors}>
            <div className={styles.colorsTitle}>Available colors</div>
            <div className={styles.colorsList}>
                {colors.map((color) => (
                    <label
                        key={color}
                        className={classNames(styles.colorsOption, {
                            [styles.colorsActive]: color === activeColor,
                        })}
                        title={getColorLabel(color)}
                    >
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={color === activeColor}
                            onChange={() => onChange(color)}
                            className={styles.colorsInput}
                        />

                        <span
                            className={styles.colorsCircle}
                            style={{ backgroundColor: getColorValue(color) }}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};
