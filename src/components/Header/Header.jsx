import React from "react";
import PurpleTop from "../../asset/img/bg-semisphere-top.png";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";
import { NavLink } from "../NavLink/NavLink";
import "./style.css";

export const Header = () => {
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
          <Button buttonclass="sign_in_btn" label="Sign In" />
          <UserButton id="userButton" />
        </div>
      </div>
    </header>
  );
};
