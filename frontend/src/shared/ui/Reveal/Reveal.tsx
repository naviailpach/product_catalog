import type React from "react";

import styles from "./Reveal.module.scss";
import { useInView } from "../../../hooks/useInView";
import classNames from "classnames";

type Props = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

export const Reveal: React.FC<Props> = ({ children, delay = 0, className }) => {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <div
            className={classNames(styles.reveal, className, {
                [styles.visible]: inView,
            })}
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
