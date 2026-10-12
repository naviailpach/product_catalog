import classNames from "classnames";
import type React from "react";

import styles from "./SkeletonFadeIn.module.scss";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export const SkeletonFadeIn: React.FC<Props> = ({ children, className }) => (
    <div className={classNames(styles.skeleton, className)}>{children}</div>
);
