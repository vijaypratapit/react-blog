/** @format */

import React from "react";
import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import "./styles.css";
const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Body;
