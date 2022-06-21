import React from "react";
import { Outlet } from "react-router-dom";
import MenuLeft from "./MenuLeft";
import Playing from "./Playing";
import TopBar from "./TopBar";

const Main = () => {
  return (
    <>
      <TopBar></TopBar>
      <MenuLeft></MenuLeft>
      <Outlet></Outlet>
      <Playing></Playing>
    </>
  );
};

export default Main;
