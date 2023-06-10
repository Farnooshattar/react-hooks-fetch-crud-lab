import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        console.log("fetch", data);
      });
  }, []);
  function onAddQuestion(newQuestion) {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  }
  function onDeleteQuestion(questionId){
    const updatedQuestions = questions.filter((question) => questionId !== question.id )
    setQuestions(updatedQuestions);
  }
 return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {/*{page === "Form" ? <QuestionForm addItem = {onAddItem} /> :*/}

      {page === "Form" ? (
        <QuestionForm onAddQuestion = {onAddQuestion} />
      ) : (
        <QuestionList questions={questions} onDeleteQuestion = {onDeleteQuestion}/>
      )}
    </main>
  );
}

export default App;
