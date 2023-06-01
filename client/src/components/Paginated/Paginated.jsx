import React, { useState, useEffect } from "react";
import style from "./Paginated.module.css";

export default function Paginated({ totalRecipes, allRecipes, handleClick }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(totalRecipes / allRecipes);
    const newPages = Array.from({ length: totalPages }, (_, i) => i + 1);
    setPages(newPages);
  }, [totalRecipes, allRecipes]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    handleClick(page);
  };

  const hasNextPage = currentPage < pages.length;
  const hasPrevPage = currentPage > 1;

  return (
    <div>
      {pages.length <= 1 ? (
        <></>
      ) : (
        <nav className={style.pagination}>
           <ul className={style.pages}>
            <li className={style.page}>
              <button
                className={style.pageBtn}
                onClick={() => hasPrevPage && handlePageClick(currentPage - 1)}
                disabled={!hasPrevPage}
              >
                Prev
              </button>
            </li>
            {pages.map((page, index) => (
              <li className={style.page} key={index}>
                <button
                  className={`${style.pageBtn} ${currentPage === page && style.activePage}`}
                  onClick={() => handlePageClick(page)}
                  style={{ width: "30px" }}
                >
                  {page}
                </button>
              </li>
            ))}
            <li className={style.page}>
              <button
                className={style.pageBtn}
                onClick={() => hasNextPage && handlePageClick(currentPage + 1)}
                disabled={!hasNextPage}
              >
                Next
              </button>
            </li>
          </ul>
          <h3>Page {currentPage}</h3>
        </nav>
      )}
    </div>
  );
};