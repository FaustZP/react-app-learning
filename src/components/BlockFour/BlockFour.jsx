import React from "react";
import PurpleLeft from "../../asset/img/bg-semisphere-left1.png";
import { Pagination } from "../Pagination/Pagination";
import { CARDS } from "../../mock";
import { Selector } from "../Selector/Selector";
import { Card } from "../Card/Card";
import "./style.css";

export const BlockFour = () => {
  let storedCards = JSON.parse(localStorage.getItem("cards") || "[]");

  return (
    <div className="fourth-block">
      <a name="Grid"></a>
      <div className="mixed-head">
        <span name="Grid" />
        <h2 className="mixed">Mixed Reality Headsets</h2>
        <Selector />
      </div>
      <ul className="grid-headsets" id="cardGrid">
        {storedCards.map((each) => (
          <Card key={each.id} i={each} />
        ))}
      </ul>
      <Pagination />
      <img src={PurpleLeft} alt="" className="semi-left-1" />
    </div>
  );
};
