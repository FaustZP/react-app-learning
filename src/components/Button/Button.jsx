import React from "react";
import "./style.css";
import UserImage from "../../asset/img/user-avatar-1.png";

export const Button = (props) => {
  return (
    <button className={props.class} id={props.id}>
      <span>{props.span}</span>
    </button>
  );
};

export const UserButton = () => {
  return (
    <button className="user-pic__btn" id="userButton">
      <img src={UserImage} alt="User Pic"></img>
    </button>
  );
};
