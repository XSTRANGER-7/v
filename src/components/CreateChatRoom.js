import React, { useState } from 'react';
import { database } from './firebase'; // Correct import
import { ref, set, push } from 'firebase/database';

function CreateChatRoom() {
  const [inputValue1, setInputValue1] = useState('');

  const saveData = async () => {
    try {
      const newDocRef = push(ref(database, 'IndiVue/chatrooms'));
      await set(newDocRef, {
        name: inputValue1,
        chats: [''] 
      });
      alert('Chat Room Created Successfully');
      setInputValue1(''); // Reset the input field after successful creation
    } catch (error) {
      console.error('Error writing to Database:', error);
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Create Chat Room</h2>
      <label htmlFor="name">Chat Room Name</label>
      <input
        type='text'
        id="name"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <br /><br />
      <button onClick={saveData}>Create</button>
    </div>
  );
}

export default CreateChatRoom;
