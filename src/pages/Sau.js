import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Sau.css";
import { dataSau } from "../dataSau";
import Question from "../components/Question";
import MyInput from "../components/MyInput";
const Home = () => {
  const [data, setData] = useState(dataSau);
  const [value, setValue] = useState("");
  const [valueNum, setValueNum] = useState("");
  useEffect(() => {
    const newData = dataSau.filter((obj) =>
      obj.question.toLowerCase().includes(value.toLowerCase())
    );
    setData(newData);
  }, [value]);
  useEffect(() => {
    const newData = dataSau.filter((obj) =>
      valueNum != "" ? obj.id == valueNum : obj.id
    );
    setData(newData);
  }, [valueNum]);
  return (
    <>
      <h1 className="title">СЭУ</h1>
      <div className="input-container">
        <MyInput
          value={value}
          setValue={setValue}
          placeholder={"по названию"}
        />
        <MyInput
          value={valueNum}
          setValue={setValueNum}
          placeholder={"по номеру"}
        />
      </div>

      <main>
        {data.map((obj) => {
          return <Question obj={obj} key={obj.id} value={value} />;
        })}
      </main>
    </>
  );
};

export default Home;
