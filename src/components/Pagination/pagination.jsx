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
    totalPage > 5
      ? currentPage > 4
        ? currentPage > totalPage - 4
          ? _.range(totalPage - 4, totalPage + 1)
          : _.range(currentPage - 2, currentPage + 3)
        : _.range(1, 6)
      : _.range(1, totalPage + 1);

  return (
    <div className="pagination-container">
      <div className="pagination">
        <button
          className={currentPage === 1 ? "btn disable" : "btn"}
          onClick={currentPage !== 1 ? onPrev : null}
        >
          Prev
        </button>
        <div className="page-container">
          {currentPage > 10 && (
            <React.Fragment>
              <span className={pageClass} onClick={onPage}>
                1
              </span>
              <span className="page-item--separate">...</span>
            </React.Fragment>
          )}
          {pageArr.map((pageItem) => (
            <span
              className={
                pageItem === currentPage ? currentPageClass : pageClass
              }
              onClick={pageItem !== currentPage ? onPage : null}
            >
              {pageItem}
            </span>
          ))}
          {currentPage < totalPage - 3 && (
            <React.Fragment>
              <span className="page-item--separate">...</span>
              <span className={pageClass} onClick={onPage}>
                {totalPage}
              </span>
            </React.Fragment>
          )}
        </div>
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
