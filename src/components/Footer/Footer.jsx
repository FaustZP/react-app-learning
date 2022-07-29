import React, { useState } from "react";
import Arrow from "../../asset/icon/arrow.svg";
import Hands from "../../asset/img/hands.png";
import { StartButton } from "../Button/Button";
import { SignModalWindow } from "../ModalWindow/ModalWindow";
import "./style.css";

export const Footer = () => {
  const login = localStorage.getItem("userEmail");
  const [isSignInVisible, setIsSignInVisible] = useState(false);

  const handleOpenSignIn = () => {
    setIsSignInVisible(true);
  };

  const handleCloseSignIn = () => {
    setIsSignInVisible(false);
  };
  const handleSubmitForm = (e) => {
    localStorage.setItem("suggested email", e.target.suggestEmail.value);
    if (!login) {
      return handleOpenSignIn();
    }
  };
  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    localStorage.setItem("userEmail", e.target.email.value);
    handleCloseSignIn();
  };
  return (
    <footer>
      <div className="foot">
        <div className="foot-content">
          <div className="left-foot">
            <h2>
              Explore product in new way
              <img src={Arrow} alt="explore" />
            </h2>
            <p>
              We specialize in creating visual identities for products and
              brands in your company.
            </p>
            <form
              target="_blank"
              action="https://www.youtube.com/watch?v=_LuyQV_iSJk"
              className="footer-input"
              onSubmit={handleSubmitForm}
            >
              <input
                name="suggestEmail"
                type="email"
                placeholder="Your Email"
                required
                className="footer-input__email"
              />
              <StartButton label="Start&nbsp;" buttonclass="start">
                <input type="submit" value="" />
              </StartButton>
            </form>
          </div>
          <img src={Hands} alt="hands" className="hands" />
        </div>
      </div>
      {isSignInVisible && (
        <SignModalWindow
          open={isSignInVisible}
          onSubmit={handleSubmitSignIn}
          onClose={handleCloseSignIn}
        />
      )}
    </footer>
  );
};
