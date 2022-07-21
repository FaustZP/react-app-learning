import React from "react";
import "./style.css";
import UserImage from "../../asset/img/user-avatar-1.png";
import StartArrow from "../../asset/icon/start-arrow.svg";

export const Button = (prop) => {
  return (
    <button className={prop.buttonclass} onClick={prop.onClick}>
      <span>{prop.label}</span>
    </button>
  );
};

export const StartButton = (prop) => {
  return (
    <button className={prop.buttonclass}>
      <span>
        {prop.label} <img src={StartArrow} alt="arrow" />
      </span>
    </button>
  );
};

export const UserButton = () => {
  return (
    <button className="user-pic__btn">
      <img src={UserImage} alt="User Pic"></img>
    </button>
  );
};

export const ModalButton = (prop) => {
  return (
    <button className="modal-button">
      <span>{prop.label}</span>
    </button>
  );
};
