import React from "react";
import "./style.css";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";
import PurpleTop from "../../asset/img/bg-semisphere-top.png";
import { NavLink } from "../NavLink/NavLink";

export const Header = () => {
  return (
    <div>
      <header>
        <div className="head">
          <a href="index.html" className="logo">
            Light
          </a>
          <img src={PurpleTop} alt="" class="bg-img-head" />

          <div className="navigation">
            <nav>
              <NavLink link="Home" sign="Home" />
              <NavLink link="Company" sign="Company" />
              <NavLink link="Features" sign="Features" />
            </nav>
            <Button class="sign_in_btn" id="signButton" span="Sign In" />
            <UserButton id="userButton" />
          </div>
        </div>
      </header>
    </div>
  );
};
