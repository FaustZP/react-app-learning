import React from "react";
import PurpleLeft from "../../asset/img/bg-semisphere-left1.png";
import "./style.css";

export const BlockFour = () => {
  return (
    <div className="fourth-block">
      <div className="mixed-head">
        <h2 className="mixed">Mixed Reality Headsets</h2>
        <div className="select" id="selector">
          <select name="filter" id="filter" defaultValue="sortOld">
            <option value="sortNew">New First</option>
            <option value="sortOld">Old First</option>
          </select>
        </div>
      </div>
      <ul className="grid-headsets" id="cardGrid"></ul>
      <div className="pagination" id="pagination">
        <a href="javascript:prevPage()" id="btn_prev">
          <span>Prev</span>
        </a>
        <div id="pages" className="pages"></div>
        <a href="javascript:nextPage()" id="btn_next">
          <span>Next</span>
        </a>
      </div>
      <img src={PurpleLeft} alt="" className="semi-left-1" />
    </div>
  );
};
