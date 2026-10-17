export const getNumberPage = (
    currentPage: number,
    totalPages: number,
): number[] => {
    const pagesPerGroup = 4;

    const startPage =
        Math.floor((currentPage - 1) / pagesPerGroup) * pagesPerGroup + 1;

    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

    return Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index,
    );
};
