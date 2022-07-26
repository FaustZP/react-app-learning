import React from "react";
import "./style.css";

export const Selector = ({ onChange }) => {
  return (
    <div className="select">
      <select name="filter" defaultValue="sortOld" onChange={onChange}>
        <option value="sortNew">New First</option>
        <option value="sortOld">Old First</option>
      </select>
    </div>
  );
};
