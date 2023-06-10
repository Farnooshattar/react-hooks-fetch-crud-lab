import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion }) {
  console.log("inside", questions);
  return (
    <section>
      <h1>Quiz Questions</h1>

      {questions.map((question, index) => {
        return <QuestionItem key={index} question={question} onDeleteQuestion= {onDeleteQuestion} />;
      })}
    </section>
  );
}

export default QuestionList;
