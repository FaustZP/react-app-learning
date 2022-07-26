import React from "react";
import "./style.css";

export const Card = ({ i }) => {
  return (
    <li className="cell">
      <button className="item-btn">
        <img
          src={`./database/images/img${i.cardImg}.jpg`}
          alt={`${i.cardName}`}
        />
        <span>
          <h3>{i.cardName}</h3>
          <p>{i.cardText}</p>
        </span>
      </button>
    </li>
  );
};