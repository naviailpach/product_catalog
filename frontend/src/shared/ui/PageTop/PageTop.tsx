import type React from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Fragment } from "react";

import styles from "./PageTop.module.scss";
import HomeIcon from "@assets/images/icons/home.svg?react";
import ArrowIcon from "@assets/images/icons/arrow.svg?react";
import { Typography } from "../Typography";

type BreadcrumbItem = {
    name: string;
    href?: string;
};

type Props = {
    title: string;
    breadcrumb?: BreadcrumbItem[];
    subtitle?: string;
    showBack?: boolean;
};

export const PageTop: React.FC<Props> = ({
    title,
    breadcrumb,
    subtitle,
    showBack,
}) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.pageTop}>
            {breadcrumb && breadcrumb.length > 0 && (
                <div className={styles.pageTopNav}>
                    <Link to={"/"} className={styles.pageTopLink}>
                        <HomeIcon className={styles.pageTopIcon} />
                    </Link>

                    {breadcrumb?.map((item, index) => (
                        <Fragment key={index}>
                            <ArrowIcon
                                className={classNames(
                                    styles.pageTopIcon,
                                    styles.pageTopIconArrow,
                                )}
                            />

                            {item.href ? (
                                <Link
                                    to={item.href}
                                    className={styles.pageTopNameLink}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <div className={styles.pageTopName}>
                                    {item.name}
                                </div>
                            )}
                        </Fragment>
                    ))}
                </div>
            )}

            {showBack && (
                <button
                    onClick={handleGoBack}
                    className={styles.pageTopBackNav}
                >
                    <ArrowIcon className={styles.pageTopIconBack} />
                    Back
                </button>
            )}

            <Typography variant="h1">{title}</Typography>

            {subtitle && <p className={styles.pageTopCount}>{subtitle}</p>}
        </div>
    );
};
