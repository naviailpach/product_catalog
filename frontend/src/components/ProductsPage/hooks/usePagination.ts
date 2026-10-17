import { useCallback, useState } from "react";

export const usePagination = (totalItems: number, itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const prevPage = useCallback(() => {
        setCurrentPage((current) => Math.max(current - 1, 1));
    }, []);

    const nextPage = useCallback(() => {
        setCurrentPage((current) => Math.min(current + 1, totalPages));
    }, [totalPages]);

    const goToPage = useCallback(
        (page: number) => {
            setCurrentPage(Math.max(1, Math.min(page, totalPages)));
        },
        [totalPages],
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const firstPage = currentPage === 1;
    const lastPage = currentPage === totalPages;

    return {
        currentPage,
        totalPages,
        prevPage,
        nextPage,
        goToPage,
        startIndex,
        endIndex,
        firstPage,
        lastPage,
    };
};
