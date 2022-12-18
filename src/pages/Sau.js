import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Sau.css";
import { dataSau } from "../dataSau";
import Question from "../components/Question";
const Home = () => {
  return (
    <>
      <h1 className="title">СЭУ</h1>
      <main>
        {dataSau.map((obj) => {
          return <Question obj={obj} />;
        })}
      </main>
    </>
  );
};

export default Home;
