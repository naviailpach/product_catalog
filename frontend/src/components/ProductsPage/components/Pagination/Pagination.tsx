import type React from "react";
import classNames from "classnames";

import styles from "./Pagination.module.scss";
import { ArrowBtn } from "../../../../shared/components/ArrowBtn";
import { getNumberPage } from "./constants/getNumberPage";

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    prevPage: () => void;
    nextPage: () => void;
    firstPage: boolean;
    lastPage: boolean;
};

export const Pagination: React.FC<Props> = ({
    currentPage,
    totalPages,
    onPageChange,
    prevPage,
    nextPage,
    firstPage,
    lastPage,
}) => {
    const pages = getNumberPage(currentPage, totalPages);

    return (
        <div className={styles.pagination}>
            <ArrowBtn
                direction="prev"
                onClick={prevPage}
                disabled={firstPage}
                className={styles.paginationArrowBtn}
            />

            <div className={styles.paginationList}>
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={classNames(styles.paginationBtn, {
                            [styles.paginationBtnActive]: page === currentPage,
                        })}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <ArrowBtn
                direction="next"
                onClick={nextPage}
                disabled={lastPage}
                className={styles.paginationArrowBtn}
            />
        </div>
    );
};
