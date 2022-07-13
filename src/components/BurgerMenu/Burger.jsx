import React from "react";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";
import "./style.css";
import { NavLink } from "../NavLink/NavLink";

export const Burger = () => {
  return (
    <div className="burger-menu">
      <input type="checkbox" className="menu__toggle" />
      <label for="menu__toggle" className="menu__btn">
        <span></span>
      </label>
      <ul className="menu-box">
        <li>
          <Button className="burger-sign__btn" span="Sign In" />
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
