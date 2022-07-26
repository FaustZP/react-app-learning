import React from "react";
import PurpleLeft from "../../asset/img/bg-semisphere-left1.png";
import { PaginatedItems } from "../Pagination/Pagination";
import { Selector } from "../Selector/Selector";
import "./style.css";

export const BlockFour = () => {
  let storedCards = JSON.parse(localStorage.getItem("cards") || "[]");
  let sortType = "sortOld";

  const sortChange = (event) => {
    sortType = event.target.value;
    switch (sortType) {
      case "sortNew":
        storedCards.sort((a, b) => b.cardTime - a.cardTime);
        console.log("sort New", storedCards);
        break;
      case "sortOld":
        storedCards.sort((a, b) => a.cardTime - b.cardTime);
        console.log("sort Old", storedCards);
        break;
      default:
        break;
    }
  };
  return (
    <div className="fourth-block">
      <a name="Grid"></a>
      <div className="mixed-head">
        <span name="Grid" />
        <h2 className="mixed">Mixed Reality Headsets</h2>
        <Selector onChange={sortChange} />
      </div>
      <ul className="grid-headsets">
        <PaginatedItems itemsPerPage={6} items={storedCards} />
      </ul>
      <img src={PurpleLeft} alt="" className="semi-left-1" />
    </div>
  );
};
