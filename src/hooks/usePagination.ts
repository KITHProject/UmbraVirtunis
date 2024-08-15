import { useState } from "react";

const usePagination = ({ initialPage = 1 } = {}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const updateTotalPages = (totalItems: number, pageSize = 10) => {
    setTotalPages(Math.ceil(totalItems / pageSize));
  };

  return {
    currentPage,
    totalPages,
    goToNextPage,
    updateTotalPages,
  };
};

export default usePagination;
