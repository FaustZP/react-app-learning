import React from "react";
import Headset1 from "../../asset/img/Woman-VR-2.png";
import Headset2 from "../../asset/img/man-VR-1.png";
import "./style.css";

export const PhotoBlock = () => {
  return (
    <div className="headset_photo">
      <img
        src={Headset1}
        alt="Woman in glass headset"
        className="headset_photo_1"
      />
      <img src={Headset2} alt="Man in VR headset" className="headset_photo_2" />
    </div>
  );
};
