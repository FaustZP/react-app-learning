import "./style.css";
import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.

const Items = ({ currentItems, onClick }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Card key={item.id} i={item} onClick={onClick} />
        ))}
    </>
  );
};

export const PaginatedItems = ({ itemsPerPage, items, t, onClick }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items, t]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} onClick={onClick} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
      />
    </>
  );
};
