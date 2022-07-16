import React from "react";
import CinematicVR from "../../asset/img/Woman-VR-1.png";
import Stars from "../../asset/icon/stars.svg";
import "./style.css";

export const Cinematic = () => {
  return (
    <div className="stars">
      <div className="cinematic">
        <img
          src={CinematicVR}
          alt="woman in VR headset"
          className="vr_img_bg"
        />
        <div className="cinematic_descr">
          <h2 className="cimematic_header">Cinematic Virtual Reality</h2>
          <hr className="line" />
          <p className="cinematic_body">
            Let’s be the best for more real and effective results and ready to
            explore the limitless world that we have prepared for you.
          </p>
        </div>
      </div>
      <img src={Stars} alt="stars" className="stars__img" />
    </div>
  );
};
