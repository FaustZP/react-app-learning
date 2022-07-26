import React from "react";
import ModalImage from "../../asset/icon/head_line_p2.svg";
import ModalSphereImg from "../../asset/img/bg-quarter-sphere.png";
import { ModalButton } from "../Button/Button";
import "./style.css";

export const SignModalWindow = ({ open, onSubmit, onClose }) => {
  return (
    <div
      className={`modal-sign-container ${
        open ? "modal-sign-container-open" : ""
      }`}
    >
      <div className="modal-content">
        <div className="modal-top">
          <h2 className="top-sign">Sign in</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <form action="#" onSubmit={onSubmit} className="modal-input-form">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            className="input"
            required
          />
          <ModalButton label="Sign In">
            <input type="submit" value="" />
          </ModalButton>
        </form>
      </div>
    </div>
  );
};

export const CardModalWindow = ({ open, onSubmit, onClose }) => {
  return (
    <div
      className={`modal-card-container ${
        open ? "modal-card-container-open" : ""
      }`}
    >
      <div className="modal-content">
        <div className="modal-header">
          <img src={ModalImage} alt="" className="head-img" />
          <h2 className="modal-header__title">Realities cards</h2>
        </div>
        <main>
          <div className="modal-top">
            <h2 className="top-sign">Add new card</h2>
            <button id="closeCard" onClick={onClose} className="close-btn">
              &times;
            </button>
          </div>
          <form action="#" onSubmit={onSubmit} className="modal-input-form">
            <input
              name="name"
              type="text"
              placeholder="Card Name"
              className="input"
              required
              id="inputCardName"
            />
            <input
              name="descr"
              type="text"
              placeholder="Card Description"
              className="input"
              required
              id="inputCardText"
            />
            <input
              name="img"
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
