import React, { useState } from "react";
import "../styles/Question.css";

const Question = ({ obj, value }) => {
  const [show, isShow] = useState(true);
  return (
    <div className="question-container" key={obj.id}>
      <h2 className="question">
        {obj.id}.{obj.question}
      </h2>
      {obj.answer.length > 300 ? (
        <>
          <p className="answer">
            {show ? obj.answer.substring(0, 200) : obj.answer}
          </p>
          <button className="btn" onClick={() => isShow(!show)}>
            {show ? `раскрыть` : `скрыть`}
          </button>
        </>
      ) : (
        <p className="answer">{obj.answer}</p>
      )}

      {obj.image && <img src={obj.image} alt="answer" className="answer-img" />}
    </div>
  );
};

export default Question;
