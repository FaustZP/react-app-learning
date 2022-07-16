import React from "react";
import ModalImage from "../../asset/icon/head_line_p2.svg";
import Thumbnail from "../../asset/img/YT-thumb.png";
import "./style.css";

export const BlockThree = () => {
  return (
    <div className="third-block">
      <img src={ModalImage} alt="" className="plank" />
      <div className="plank-content">
        <h2 className="page-2-header">
          Awesome experiences with virtual reality world
        </h2>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          className="thumb"
        >
          <img src={Thumbnail} alt="Play video" />
        </a>
      </div>
    </div>
  );
};
