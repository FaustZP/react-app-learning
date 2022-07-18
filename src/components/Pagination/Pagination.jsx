import React from "react";
import "./style.css";

export const Pagination = () => {
  return (
    <div className="pagination">
      <a href="javascript:prevPage()">
        <span>Prev</span>
      </a>
      <div className="pages"></div>
      <a href="javascript:nextPage()">
        <span>Next</span>
      </a>
    </div>
  );
};
