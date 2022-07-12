import React from "react";
import "./style.css";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";

export const Header = () => {
  return (
    <div>
      <header>
        <div className="head">
          <a href="index.html" className="logo">
            Light
          </a>
          <div className="navigation">
            <nav>
              <a href="index.html" className="nav_link">
                Home
              </a>
              <a href="#" className="nav_link">
                Company
              </a>
              <a href="" className="nav_link">
                Feautres
              </a>
            </nav>
            <Button class="sign_in_btn" id="signButton" span="Sign In" />
            <UserButton />
          </div>
        </div>
      </header>
    </div>
  );
};
