import React from "react";
import PurpleRight from "../../asset/img/bg-semisphere-right.png";
import { Cinematic } from "../Cinematic/Cinematic";
import { Explore } from "../Explore/Explore";
import "./style.css";

export const BlockOne = () => {
  return (
    <div className="first-block">
      <a name="Home" />
      <Cinematic />
      <Explore />
      <img src={PurpleRight} alt="" className="semi-right" />
    </div>
  );
};
