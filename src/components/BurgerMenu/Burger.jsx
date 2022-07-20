import React from "react";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";
import { NavLink } from "../NavLink/NavLink";
import "./style.css";

export const Burger = () => {
  return (
    <div className="burger-menu">
      <input type="checkbox" className="menu__toggle" />
      <label for="menu__toggle" className="menu__btn">
        <span></span>
      </label>
      <ul className="menu-box">
        <li>
          <Button buttonclass="burger-sign__btn" label="Sign In" />
        </li>
        <UserButton />
        <li>
          <NavLink link="#Home" label="Home" />
        </li>
        <li>
          <NavLink link="#Company" label="Company" />
        </li>
        <li>
          <NavLink link="#Features" label="Features" />
        </li>
      </ul>
    </div>
  );
};
