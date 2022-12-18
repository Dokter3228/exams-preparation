import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section style={{ textAlign: "center" }} className="main-section">
        <Outlet />
      </section>
    </>
  );
};

export default SharedLayout;
