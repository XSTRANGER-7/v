import React, {useState} from 'react';
import app from "./firebase";
import { getDatabase, ref, get, remove } from "firebase/database";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ChatRoomList() {

  let [chatrooms, setchatrooms] = useState([]);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "IndiVue/chatrooms");
    const snapshot = await get(dbRef);
    if(snapshot.exists()) {

        const myData = snapshot.val();
        const temporaryArray = Object.keys(myData).map( myFireId => {
            return {
                ...myData[myFireId],
                chatroomId: myFireId
            }
        } )
      setchatrooms(temporaryArray);
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
        {chatrooms.map( (item, index) => (
          <>
            <li key={index}> 
              {item.name}   
              <Link to={`/chatroom/${item.chatroomId}`}>View</Link> 
           
            </li>

          </>

        ) )}
      </ul>
      

    </div>
  )
}

export default ChatRoomList