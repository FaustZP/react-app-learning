import React from "react";
import PurpleLeft from "../../asset/img/bg-semisphere-left1.png";
import { Pagination } from "../Pagination/Pagination";
import { Selector } from "../Selector/Selector";
import "./style.css";

export const BlockFour = () => {
  return (
    <div className="fourth-block">
      <div className="mixed-head">
        <h2 className="mixed">Mixed Reality Headsets</h2>
        <Selector />
      </div>
      <ul className="grid-headsets" id="cardGrid"></ul>
      <Pagination />
      <img src={PurpleLeft} alt="" className="semi-left-1" />
    </div>
  );
};
