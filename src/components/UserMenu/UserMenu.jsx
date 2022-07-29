import React from "react";
import Chevron from "../../asset/icon/chevron-up.svg";
import "./style.css";

function logOut() {
  localStorage.removeItem("userEmail");
  console.log("Log Out");
  window.location.reload();
}

export const UserMenu = ({ open, onClose, addCard }) => {
  return (
    <div className={`menu ${open ? "menu-open" : ""}`} id="userMenu">
      <div className="menu-header" onClick={onClose}>
        <p>User menu:</p>
        <button className="menu-close-btn">
          <img src={Chevron} alt="" />
        </button>
      </div>
      <div className="menu-main">
        <button className="menu-btn" onClick={addCard}>
          Card management
        </button>
        <a href="#Grid" className="menu-btn" name="added">
          Recently Added
        </a>
        <button className="menu-btn" onClick={logOut}>
          Log out
        </button>
      </div>
    </div>
  );
};
