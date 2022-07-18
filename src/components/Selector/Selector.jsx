import React from "react";
import "./style.css";

export const Selector = () => {
  return (
    <div className="select">
      <select name="filter" defaultValue="sortOld">
        <option value="sortNew">New First</option>
        <option value="sortOld">Old First</option>
      </select>
    </div>
  );
};
