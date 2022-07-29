import React, { useState } from "react";
import PurpleTop from "../../asset/img/bg-semisphere-top.png";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";
import { SignModalWindow } from "../ModalWindow/ModalWindow";
import { NavLink } from "../NavLink/NavLink";
import { UserMenu } from "../UserMenu/UserMenu";
import { CardModalWindow } from "../ModalWindow/ModalWindow";
import "./style.css";

export const Header = () => {
  const [isSignInVisible, setIsSignInVisible] = useState(false);

  const handleOpenSignIn = () => {
    setIsSignInVisible(true);
  };

  const handleCloseSignIn = () => {
    setIsSignInVisible(false);
  };

  const [isAddCardVisible, setIsAddCardVisible] = useState(false);

  const handleOpenAddCard = () => {
    setIsAddCardVisible(true);
  };

  const handleCloseAddCard = () => {
    setIsAddCardVisible(false);
  };

  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

  const handleOpenUserMenu = () => {
    setIsUserMenuVisible(true);
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuVisible(false);
  };
  const login = localStorage.getItem("userEmail");

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", e.target.email.value);
    handleCloseSignIn();
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
    <header>
      <div className="head">
        <a href="index.html" className="logo">
          Light
        </a>
        <img src={PurpleTop} alt="" className="bg-img-head" />
        <div className="navigation">
          <nav>
            <NavLink link="#Home" label="Home" />
            <NavLink link="#Company" label="Company" />
            <NavLink link="#Features" label="Features" />
          </nav>
          <Button
            buttonclass={`sign_in_btn ${login ? "invisible" : "visible"}`}
            label="Sign In"
            onClick={handleOpenSignIn}
          />
          <UserButton
            buttonclass={`user-pic__btn ${login ? "visible" : "invisible"}`}
            onClick={handleOpenUserMenu}
          />
        </div>
        {isUserMenuVisible && (
          <UserMenu
            open={isUserMenuVisible}
            addCard={handleOpenAddCard}
            onClose={handleCloseUserMenu}
          />
        )}
      </div>
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
    </header>
  );
};
