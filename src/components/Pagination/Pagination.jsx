import "./style.css";
import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { ItemModalWindow } from "../ModalWindow/ModalWindow";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {
  const [isItemVisible, setIsItemVisible] = useState(false);

  const handleOpenItem = () => {
    setIsItemVisible(true);
  };

  const handleCloseItem = () => {
    setIsItemVisible(false);
  };
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Card key={item.id} i={item} onClick={handleOpenItem} />
        ))}
      {isItemVisible && (
        <ItemModalWindow open={isItemVisible} onClose={handleCloseItem} />
      )}
    </>
  );
}

export const PaginatedItems = ({ itemsPerPage, items }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
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
