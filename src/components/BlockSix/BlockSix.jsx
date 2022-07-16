import React from "react";
import PurpleLeft from "../../asset/img/bg-semisphere-left2.png";
import PurpleSphere from "../../asset/img/bg-sphere.png";
import Heart from "../../asset/icon/heart.svg";
import Sincere from "../../asset/icon/be-sincere.svg";
import Stronger from "../../asset/icon/stronger-together.svg";
import Simple from "../../asset/icon/keep-it-simple.svg";
import Intelligent from "../../asset/icon/intelligent.svg";
import "./style.css";

export const BlockSix = () => {
  return (
    <div className="sixth-block">
      <img src={PurpleLeft} alt="" className="semi-left-2" />
      <img src={PurpleSphere} alt="" className="sphere" />
      <div className="bottom-text">
        <a name="Company"></a>
        <h2>
          Our company values culture
          <img src={Heart} alt="heart" />
        </h2>
        <p>
          We specialize in creating visual identities for products and branda in
          your company.
        </p>
      </div>
      <ul className="icons">
        <li className="icon">
          <img src={Sincere} alt="be sincere" />
          <p>Be Sincere</p>
        </li>
        <li className="icon">
          <img src={Stronger} alt="stronger together" />
          <p>Stronger together</p>
        </li>
        <li className="icon">
          <img src={Simple} />
          <p>Keep it simple</p>
        </li>
        <li className="icon">
          <img src={Intelligent} alt="intelligent" />
          <p>Take intelligent risks</p>
        </li>
      </ul>
    </div>
  );
};
