import React from "react";

const QuestionThermo = ({ obj }) => {
  return (
    <div className="question-container">
      <h2>Билет {obj.id}</h2>
      <h3>1) {obj.question1}</h3>
      <p>{obj.answer1}</p>
      <h3>2) {obj.question2}</h3>
      <p>{obj.answer2}</p>
      {obj.image && (
        <img src={obj.image} alt="thermoanswer" className="answer-img" />
      )}
    </div>
  );
};

export default QuestionThermo;
