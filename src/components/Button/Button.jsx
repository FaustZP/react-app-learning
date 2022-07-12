import React from "react";
import "./style.css";
import UserImage from "../../asset/img/user-avatar-1.png";
import StartArrow from "../../asset/icon/start-arrow.svg";
export const Button = (props) => {
  return (
    <button className={props.class} id={props.id}>
      <span>{props.span}</span>
    </button>
  );
};

export const UserButton = (prop) => {
  return (
    <button className="user-pic__btn" id={prop.id}>
      <img src={UserImage} alt="User Pic"></img>
    </button>
  );
};
