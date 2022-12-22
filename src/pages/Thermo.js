import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import MyInput from "../components/MyInput";
import QuestionThermo from "../components/QuestionThermo";
import { dataThermo } from "../dataThermo";
import "../styles/Thermo.css";
const About = () => {
  const [data, setData] = useState(dataThermo);
  const [value, setValue] = useState("");
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const newData = dataThermo.filter((obj) =>
      value != "" ? obj.id == value : obj.id
    );
    setData(newData);
  }, [value]);
  return (
    <div className="holder">
      <h1 className="title">Термодинамика</h1>
      <Modal active={modalActive} setActive={setModalActive}>
        Кнопка на случай поноса
      </Modal>

      <button className="btn-sos" onClick={() => setModalActive(true)}>
        SOS
      </button>
      <MyInput value={value} setValue={setValue} placeholder={"по номеру"} />

      <main>
        {data.map((obj) => {
          return <QuestionThermo obj={obj} key={obj.id} />;
        })}
      </main>
    </div>
  );
};

export default About;
