import React, {useState} from 'react';
import app from "./firebase";
import { getDatabase, ref, get, remove } from "firebase/database";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function VoterQuizList() {

  let [quizzes, setquizzes] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "IndiVue/polls");
    const snapshot = await get(dbRef);
    if(snapshot.exists()) {

        const myData = snapshot.val();
        const temporaryArray = Object.keys(myData).map( myFireId => {
            return {
                ...myData[myFireId],
                quizId: myFireId
            }
        } )
      setquizzes(temporaryArray);
    } else {
      alert("error");
    }
  }

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []);



  return (
    <div>
      <ul>
        {quizzes.map( (item, index) => (
          <>
            <li key={index}> 
              {item.name}   
              <Link to={`/quiz/${item.quizId}`}>View</Link> 
              <Link to={`/poll/${item.quizId}`}>Poll</Link> 
           
            </li>

          </>

        ) )}
      </ul>
      

    </div>
  )
}

export default VoterQuizList