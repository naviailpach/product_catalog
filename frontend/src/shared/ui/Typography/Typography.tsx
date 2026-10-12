import type React from "react";
import classNames from "classnames";

import styles from "./Typography.module.scss";
import type { TypographyVariant } from "./constants/typographyVariants";

type Props = {
    children: React.ReactNode;
    variant: TypographyVariant;
    className?: string;
};

export const Typography: React.FC<Props> = ({
    children,
    variant,
    className,
}) => {
    const Tag = variant;

    return (
        <Tag className={classNames(styles[variant], className)}>{children}</Tag>
    );
};
