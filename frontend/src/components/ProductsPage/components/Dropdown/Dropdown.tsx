import type React from "react";
import classNames from "classnames";

import styles from "./Dropdown.module.scss";
import ArrowIcon from "@assets/images/icons/arrow.svg?react";
import { useOpenDropdown } from "./hooks/useDropdown";

type Option = {
    value: string;
    label: string;
};

type Props = {
    title: string;
    value: string;
    options: Option[];
    onChange: (value: string) => void;
    className?: string;
};

export const Dropdown: React.FC<Props> = ({
    title,
    value,
    options,
    onChange,
    className,
}) => {
    const {
        isOpen,
        shouldRender,
        dropdownRef,
        handleSelect,
        toggleOpen,
        handleAnimationEnd,
    } = useOpenDropdown(onChange);

    const selected = options.find((option) => option.value === value);

    return (
        <div
            className={classNames(styles.dropdown, className)}
            ref={dropdownRef}
        >
            <div className={styles.dropdownTitle}>{title}</div>

            <button onClick={toggleOpen} className={styles.dropdownSelect}>
                <div className={styles.dropdownSelectedValue}>
                    {selected ? selected.label : ""}
                </div>

                <ArrowIcon
                    className={classNames(styles.dropdownIcon, {
                        [styles.dropdownIconOpen]: isOpen,
                    })}
                />
            </button>

            {shouldRender && (
                <ul
                    className={classNames(styles.dropdownList, {
                        [styles.isClosing]: !isOpen,
                    })}
                    onAnimationEnd={handleAnimationEnd}
                >
                    {options.map((option) => (
                        <li
                            key={option.label}
                            onClick={() => handleSelect(option.value)}
                            className={styles.dropdownOption}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
