import React from "react";
import PurpleLeft from "../../asset/img/bg-semisphere-left.png";
import { PhotoBlock } from "../PhotosBlock/PhotoBlock";
import { Experience } from "../Expierience/Experience";
import "./style.css";

export const BlockTwo = () => {
  return (
    <div className="second-block">
      <a name="Features" />
      <img src={PurpleLeft} alt="" className="semi-left" />
      <PhotoBlock />
      <Experience />
    </div>
  );
};
