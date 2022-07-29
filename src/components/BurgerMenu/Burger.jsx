import React, { useState } from "react";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";
import { CardModalWindow, SignModalWindow } from "../ModalWindow/ModalWindow";
import { NavLink } from "../NavLink/NavLink";
import { slide as Menu } from "react-burger-menu";
import "./style.css";
import "./burger.css";
import { UserMenu } from "../UserMenu/UserMenu";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

export const Burger = () => {
  const [isSignInVisible, setIsSignInVisible] = useState(false);

  const handleOpenSignIn = () => {
    setIsSignInVisible(true);
  };

  const handleCloseSignIn = () => {
    setIsSignInVisible(false);
  };

  const login = localStorage.getItem("userEmail");
  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", e.target.email.value);
    console.log("Login user");
    console.log("login: ", login);
    handleCloseSignIn();
  };

  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

  const handleOpenUserMenu = () => {
    setIsUserMenuVisible(true);
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuVisible(false);
  };

  const [isAddCardVisible, setIsAddCardVisible] = useState(false);

  const handleOpenAddCard = () => {
    setIsAddCardVisible(true);
  };

  const handleCloseAddCard = () => {
    setIsAddCardVisible(false);
  };

  const handleSubmitAddCard = (e) => {
    e.preventDefault();
    let storedCards = JSON.parse(localStorage.getItem("cards") || "[]");
    let inputCardName = e.target.name.value;
    let inputCardText = e.target.descr.value;
    let inputCardImgName = e.target.img.value;
    let userCard = {
      id: storedCards.length,
      cardImg: inputCardImgName,
      cardName: inputCardName,
      cardText: inputCardText,
      cardTime: Date.now(),
    };
    storedCards.push(userCard);
    localStorage.setItem("cards", JSON.stringify(storedCards));
    handleCloseAddCard();
    window.location.reload();
  };

  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <span className="menu-item">
        <Button
          buttonclass={`sign_in_btn ${login ? "invisible" : "visible"}`}
          label="Sign In"
          onClick={handleOpenSignIn}
        />
      </span>
      <span className="menu-item">
        <UserButton
          buttonclass={`user-pic__btn ${login ? "visible" : "invisible"}`}
          onClick={handleOpenUserMenu}
        />
      </span>
      <span className="menu-item">
        <NavLink link="#Home" label="Home" />
      </span>
      <span className="menu-item">
        <NavLink link="#Company" label="Company" />
      </span>
      <span className="menu-item">
        <NavLink link="#Features" label="Features" />
      </span>
      {isUserMenuVisible && (
        <UserMenu
          open={isUserMenuVisible}
          addCard={handleOpenAddCard}
          onClose={handleCloseUserMenu}
        />
      )}
      {isSignInVisible && (
        <SignModalWindow
          open={isSignInVisible}
          onSubmit={handleSubmitSignIn}
          onClose={handleCloseSignIn}
        />
      )}
      {isAddCardVisible && (
        <CardModalWindow
          open={isAddCardVisible}
          onSubmit={handleSubmitAddCard}
          onClose={handleCloseAddCard}
        />
      )}
    </Menu>
  );
};
