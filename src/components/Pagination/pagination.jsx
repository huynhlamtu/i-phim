import React from "react";
import _ from "lodash";
import "./pagination.css";

export default function Pagination({
  currentPage,
  totalPage,
  onNext,
  onPrev,
  onPage,
}) {
  const currentPageClass = "current-page";
  const pageClass = "page-items";
  const pageArr =
    currentPage > 4
      ? currentPage > totalPage - 4
        ? _.range(totalPage - 4, totalPage + 1)
        : _.range(currentPage - 2, currentPage + 3)
      : _.range(1, 6);
  return (
    <div className="pagination">
      <div className="page-container">
        {pageArr.map((pageItem) => (
          <span
            className={pageItem === currentPage ? currentPageClass : pageClass}
            onClick={pageItem !== currentPage ? onPage : ""}
          >
            {pageItem}
          </span>
        ))}
      </div>
      <div className="btn-container">
        <button
          className={currentPage === 1 ? "btn disable" : "btn"}
          onClick={onPrev}
        >
          Prev
        </button>

        <button
          className={currentPage === totalPage ? "btn disable" : "btn"}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
