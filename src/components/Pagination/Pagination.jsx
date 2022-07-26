import React from "react";
import "./style.css";

export const Pagination = () => {
  return (
    <div className="pagination">
      <button>
        <span>Prev</span>
      </button>
      <div className="pages"></div>
      <button>
        <span>Next</span>
      </button>
    </div>
  );
};
