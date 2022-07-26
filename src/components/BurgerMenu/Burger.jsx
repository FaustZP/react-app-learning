import React, { useState } from "react";
import { Button } from "../Button/Button";
import { UserButton } from "../Button/Button";
import { SignModalWindow } from "../ModalWindow/ModalWindow";
import { NavLink } from "../NavLink/NavLink";
import { slide as Menu } from "react-burger-menu";
import "./style.css";
import "./burger.css";

// export const Burger = () => {

//   return (
//     <Menu className="burger-menu">
//       {/* <input type="checkbox" className="menu__toggle" />
//       <label for="menu__toggle" className="menu__btn">
//         <span></span>
//       </label> */}
//       <ul className="menu-box">
//         <li>
//           <Button
//             buttonclass="burger-sign__btn"
//             label="Sign In"
//             onClick={handleOpenDialog}
//           />
//         </li>
//         <UserButton />
//         <li>
//           <NavLink link="#Home" label="Home" />
//         </li>
//         <li>
//           <NavLink link="#Company" label="Company" />
//         </li>
//         <li>
//           <NavLink link="#Features" label="Features" />
//         </li>
//       </ul>
//       {isDialogVisible && (
//         <SignModalWindow
//           open={isDialogVisible}
//           onSubmit={handleSubmitSignInDialog}
//           onClose={handleCloseDialog}
//         />
//       )}
//     </Menu>
//   );
// };

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

export const Burger = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
  };

  const handleSubmitSignInDialog = (e) => {
    e.preventDefault();
    console.log("Login user");
    handleCloseDialog();
  };

  const login = localStorage.getItem("userEmail");

  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <span className="menu-item">
        <Button
          buttonclass={`sign_in_btn ${login ? "invisible" : "visible"}`}
          label="Sign In"
          onClick={handleOpenDialog}
        />
      </span>
      <span className="menu-item">
        <UserButton
          buttonclass={`user-pic__btn ${login ? "visible" : "invisible"}`}
        />
      </span>
      <span className="menu-item">
        <NavLink link="#Home" label="Home" />
      </span>
      <span className="menu-item">
        <NavLink link="#Company" label="Company" />
      </span>
      <span className="menu-item">
        <NavLink link="#Features" label="Features" />
      </span>
    </Menu>
  );
};
