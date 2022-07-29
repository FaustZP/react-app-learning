import React, { useState } from "react";
import PurpleLeft from "../../asset/img/bg-semisphere-left1.png";
import { PaginatedItems } from "../Pagination/Pagination";
import { Selector } from "../Selector/Selector";
import { ItemModalWindow } from "../ModalWindow/ModalWindow";
import "./style.css";

export const BlockFour = () => {
  const [isItemVisible, setIsItemVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOpenItem = (item) => {
    setIsItemVisible(true);
    setSelectedItem(item);
    console.log("Click on card: ", item);
  };

  const handleCloseItem = () => {
    setIsItemVisible(false);
  };

  const [storedCards, setStoredCards] = useState(
    JSON.parse(localStorage.getItem("cards") || "[]")
  );
  const [sortType, setSortType] = useState("sortNew");
  const [t, setT] = useState(false);
  let itemPerPage = 6;
  if (window.innerWidth <= 550) {
    itemPerPage = 3;
  }

  const sortChange = (event) => {
    setT((prev) => !prev);
    setSortType(event.target.value);
    switch (sortType) {
      case "sortNew":
        const sortedN = storedCards.sort((a, b) => b.cardTime - a.cardTime);
        setStoredCards(sortedN);
        break;
      case "sortOld":
        const sortedO = storedCards.sort((a, b) => a.cardTime - b.cardTime);
        setStoredCards(sortedO);
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
        <PaginatedItems
          itemsPerPage={itemPerPage}
          items={storedCards}
          t={t}
          onClick={handleOpenItem}
        />
      </ul>
      <img src={PurpleLeft} alt="" className="semi-left-1" />
      {isItemVisible && (
        <ItemModalWindow
          open={isItemVisible}
          onClose={handleCloseItem}
          item={selectedItem}
        />
      )}
    </div>
  );
};
