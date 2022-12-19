import React, { useState, useEffect } from "react";
import MyInput from "../components/MyInput";
import QuestionThermo from "../components/QuestionThermo";
import { dataThermo } from "../dataThermo";
import "../styles/Thermo.css";
const About = () => {
  const [data, setData] = useState(dataThermo);
  const [value, setValue] = useState("");

  useEffect(() => {
    const newData = dataThermo.filter((obj) =>
      value != "" ? obj.id == value : obj.id
    );
    setData(newData);
  }, [value]);
  return (
    <>
      <h1 className="title">Термодинамика</h1>
      <MyInput value={value} setValue={setValue} placeholder={"по номеру"} />
      <main>
        {data.map((obj) => {
          return <QuestionThermo obj={obj} key={obj.id} />;
        })}
      </main>
    </>
  );
};

export default About;
