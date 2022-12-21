import React, { useState, useEffect } from "react";
import "../styles/Material.css";
import { dataMaterial } from "../dataMaterial";
const Material = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(dataMaterial);
  const [valueNum, setValueNum] = useState("");

  useEffect(() => {
    const newData = dataMaterial.filter((obj) =>
      obj.question.toLowerCase().includes(value.toLowerCase())
    );
    setData(newData);
  }, [value]);
  useEffect(() => {
    const newData = dataMaterial.filter((obj) =>
      valueNum != "" ? obj.id == valueNum : obj.id
    );
    setData(newData);
  }, [valueNum]);
  return (
    <>
      <h1 className="title">Материаловедение</h1>
      <div className="input-container">
        <input
          className="search-input"
          placeholder="по названию"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="search-input"
          placeholder="по номеру"
          value={valueNum}
          onChange={(e) => setValueNum(e.target.value)}
        />
      </div>

      <main>
        {data.map((obj) => {
          return (
            <div className="question-container" key={obj.id}>
              <h2 className="question">
                {obj.id}.{obj.question}
              </h2>
              <p className="answer">{obj.answer}</p>
              {obj.image && (
                <img src={obj.image} alt="answer" className="answer-img" />
              )}
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Material;
