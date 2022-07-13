import React from "react";
import { Header } from "./components/Header/Header";
import { CardModalWindow } from "./components/ModalWindow/ModalWindow";
import "../src/reset/reset.css";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <CardModalWindow />
    </div>
  );
};
