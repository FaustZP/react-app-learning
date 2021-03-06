import React from "react";
import { REVIEWS } from "../../mock";
import { Reviews } from "../Reviews/Reviews";
import "./style.css";

export const BlockFive = () => {
  return (
    <div className="fifth-block">
      <h2>What our clients say</h2>
      <p className="feedback-descr">
        See what our customer say about us. It really matter for us. How good or
        bad we will make it for evaluation to make EhyalLive better.
      </p>
      <div className="feed-row" id="feedRow">
        {REVIEWS.map((each) => (
          <Reviews key={each.id} item={each} />
        ))}
      </div>
    </div>
  );
};
