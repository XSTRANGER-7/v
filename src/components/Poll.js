import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import app from "./firebase";
import { getDatabase, ref, get, update } from "firebase/database";

function Poll() {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const db = getDatabase(app);
        const quizRef = ref(db, `IndiVue/polls/${quizId}`);
        const snapshot = await get(quizRef);
        if (snapshot.exists()) {
          setQuiz(snapshot.val());
        } else {
          console.error("Quiz not found");
        }
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  if (!quiz) {
    return <p>Loading...</p>;
  }

  const vote = async (optionIndex) => {
    try {
      const db = getDatabase(app);
      const quizRef = ref(db, `IndiVue/polls/${quizId}`);
      const updatedOptions = quiz.options.map((option, index) => {
        if (index === optionIndex) {
          return { ...option, count: option.count + 1 };
        }
        return option;
      });
      await update(quizRef, { options: updatedOptions });
      setQuiz({ ...quiz, options: updatedOptions });
      alert("Vote counted successfully!");
    } catch (error) {
      console.error("Error updating vote count:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Poll Name: {quiz.name}</h2>
      <p>Poll Question: {quiz.question}</p>
      <ul>
        {quiz.options.map((item, index) => (
          <li key={index}>
            <p>Option: {item.option}</p>
            <p>Poll Ratio: {item.count}</p>
            <button className='votebutton bg-blue-400 p-1' onClick={() => vote(index)}>VOTE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Poll;
