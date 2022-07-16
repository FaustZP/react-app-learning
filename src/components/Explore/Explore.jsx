import React from "react";
import Avatar1 from "../../asset/img/user-avatar-1.png";
import Avatar2 from "../../asset/img/user-avatar-2.png";
import Avatar3 from "../../asset/img/user-avatar-3.png";
import Avatar4 from "../../asset/img/user-avatar-4.png";
import CircleIcon from "../../asset/icon/circle-icon.svg";
import { Button } from "../Button/Button";
import "./style.css";

export const Explore = () => {
  return (
    <div className="description">
      <h1 className="description_header">
        Let’s Explore Three-Dimensional visual
      </h1>
      <p className="description_body">
        With virtual technology you can see the digital world feel more real and
        you can play the game with a new style.
      </p>
      <div className="description__btn">
        <Button buttonclass="get_it_btn" label="Get It Now" />
        <a href="" className="explore">
          Explore<span> Device</span>
        </a>
      </div>
      <div className="online_counter">
        <ul className="avatars_row">
          <li className="avatars_row__pic">
            <img src={Avatar1} alt="user 1" />
          </li>
          <li className="avatars_row__pic">
            <img src={Avatar2} alt="user 2" />
          </li>
          <li className="avatars_row__pic">
            <img src={Avatar3} alt="user 3" />
          </li>
          <li className="avatars_row__pic">
            <img src={Avatar4} alt="user 4" />
          </li>
        </ul>
        <img src={CircleIcon} alt="circle" className="circle-icon" />
        400k people online
      </div>
    </div>
  );
};
