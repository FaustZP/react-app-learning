import React from "react";
import Chevron from "../../asset/icon/chevron-up.svg";
import "./style.css";

export const UserMenu = () => {
  return (
    <div className="menu" id="userMenu">
      <div className="menu-header">
        <p>User menu</p>
        <button className="menu-close-btn" id="closeMenuButton">
          <img src={Chevron} alt="" />
        </button>
      </div>
      <div className="menu-main">
        <button
          className="menu-btn"
          name="dash"
          onclick="actionModal('cardModal', 'closeCard')"
        >
          Card management
        </button>
        <a href="item.html" className="menu-btn" name="added">
          Recently Added
        </a>
        <button className="menu-btn" id="log-out" onclick="logOut()">
          Log out
        </button>
      </div>
    </div>
  );
};
