import React, { useState } from "react";
import PurpleTop from "../../asset/img/bg-semisphere-top.png";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";
import { SignModalWindow } from "../ModalWindow/ModalWindow";
import { NavLink } from "../NavLink/NavLink";
import "./style.css";

export const Header = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
  };

  const handleSubmitSignInDialog = (e) => {
    e.preventDefault();
    console.log("Login user");
    handleCloseDialog();
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
            buttonclass="sign_in_btn"
            label="Sign In"
            onClick={handleOpenDialog}
          />
          <UserButton id="userButton" />
        </div>
      </div>
      {isDialogVisible && (
        <SignModalWindow
          open={isDialogVisible}
          onSubmit={handleSubmitSignInDialog}
          onClose={handleCloseDialog}
        />
      )}
    </header>
  );
};
