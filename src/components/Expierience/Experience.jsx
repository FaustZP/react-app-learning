import React from "react";
import { Button } from "../Button/Button";
import "./style.css";

export const Experience = () => {
  return (
    <div className="exp_descr">
      <h2 className="exp_descr_header">New Experience In Playing Game</h2>
      <p className="exp_descr_body">
        You can try playing the game with a new style and of course a more real
        feel, like you are the main character in your game and adventure in this
        new digital world.
      </p>
      <Button buttonclass="get_it_btn" label="Get it Now" />
    </div>
  );
};
