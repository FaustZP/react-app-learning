import React from "react";
import Arrow from "../../asset/icon/arrow.svg";
import Hands from "../../asset/img/hands.png";
import { StartButton } from "../Button/Button";
import "./style.css";

export const Footer = () => {
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
            <form className="footer-input">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="footer-input__email"
              />
              <StartButton label="Start&nbsp;" buttonclass="start" />
            </form>
          </div>
          <img src={Hands} alt="hands" className="hands" />
        </div>
      </div>
    </footer>
  );
};
