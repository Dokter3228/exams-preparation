import React from "react";
import QuestionThermo from "../components/QuestionThermo";
import { dataThermo } from "../dataThermo";
import "../styles/Thermo.css";
const About = () => {
  return (
    <>
      <h1 className="title">Термодинамика</h1>
      <main>
        {dataThermo.map((obj) => {
          return <QuestionThermo obj={obj} />;
        })}
      </main>
    </>
  );
};

export default About;
