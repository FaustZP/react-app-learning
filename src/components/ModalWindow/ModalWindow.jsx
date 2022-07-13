import React from "react";
import ModalImage from "../../asset/icon/head_line_p2.svg";
import ModalSphereImg from "../../asset/img/bg-quarter-sphere.png";
import { ModalButton } from "../Button/Button";
import "./style.css";

export const SignModalWindow = () => {
  return (
    <div className="modal-sign-container">
      <div className="modal-content">
        <div className="modal-top">
          <h2 className="top-sign">Sign in</h2>
          <span className="close-btn">&times;</span>
        </div>
        <form action="" className="modal-input-form">
          <input
            type="email"
            placeholder="Your Email"
            className="input"
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            className="input"
            required
          />
          <ModalButton label="Sign In" />
        </form>
      </div>
    </div>
  );
};

export const CardModalWindow = () => {
  return (
    <div className="modal-card-container" id="cardModal">
      <div className="modal-content">
        <div className="modal-header">
          <img src={ModalImage} alt="" className="head-img" />
          <h2 className="modal-header__title">Realities cards</h2>
        </div>
        <main>
          <div className="modal-top">
            <h2 className="top-sign">Add new card</h2>
            <span id="closeCard" className="close-btn">
              &times;
            </span>
          </div>
          <form action="" className="modal-input-form" id="addCardForm">
            <input
              type="text"
              placeholder="Card Name"
              className="input"
              required
              id="inputCardName"
            />
            <input
              type="text"
              placeholder="Card Description"
              className="input"
              required
              id="inputCardText"
            />
            <input
              type="number"
              placeholder="Card image number (from 1 to 24)"
              className="input"
              required
              id="inputCardImgName"
              min="1"
              max="24"
            />
            <ModalButton label="Add">
              <input type="submit" value="" />
            </ModalButton>
            <img src={ModalSphereImg} alt="" className="bg-img" />
          </form>
        </main>
      </div>
    </div>
  );
};
