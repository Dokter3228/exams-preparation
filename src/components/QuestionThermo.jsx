import React from "react";

const QuestionThermo = ({ obj }) => {
  return (
    <div className="question-container" key={obj.id}>
      <h2 className="ticket">Билет {obj.id}</h2>
      <h3 className="question">1) {obj.question1}</h3>
      <p className="answer">{obj.answer1}</p>
      <h3 className="question">2) {obj.question2}</h3>
      <p className="answer">{obj.answer2}</p>
      {obj.image && (
        <img src={obj.image} alt="thermoanswer" className="answer-img" />
      )}
    </div>
  );
};

export default QuestionThermo;
