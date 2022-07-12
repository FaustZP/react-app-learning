import React from "react";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";
import "./style.css";
import { NavLink } from "../NavLink/NavLink";

export const Burger = () => {
  return (
    <div className="hamburger-menu">
      <input type="checkbox" id="menu__toggle" className="menu__toggle" />
      <label for="menu__toggle" className="menu__btn">
        <span></span>
      </label>
      <ul className="menu-box">
        <li>
          <Button
            class="burger-sign__btn"
            id="signButtonBurger"
            span="Sign In"
          />
        </li>
        <UserButton id="userBurgerButton" />
        <li>
          <NavLink link="Home" sign="Home" />
        </li>
        <li>
          <NavLink link="Company" sign="Company" />
        </li>
        <li>
          <NavLink link="Features" sign="Features" />
        </li>
      </ul>
    </div>
  );
};
