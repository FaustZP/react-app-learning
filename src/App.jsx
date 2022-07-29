import React from "react";
import { Header } from "./components/Header/Header";
import { BlockOne } from "./components/BlockOne/BlockOne";
import { BlockTwo } from "./components/BlockTwo/BlockTwo";
import { BlockThree } from "./components/BlockThree/BlockThree";
import { BlockFour } from "./components/BlockFour/BlockFour";
import { BlockFive } from "./components/BlockFive/BlockFive";
import { BlockSix } from "./components/BlockSix/BlockSix";
import { Footer } from "./components/Footer/Footer";
import { Burger } from "./components/BurgerMenu/Burger";
import "./reset/reset.css";
import "./style.css";

export const App = () => {
  return (
    <div className="container">
      <Burger />
      <Header />
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
      <BlockFive />
      <BlockSix />
      <Footer />
    </div>
  );
};
