import React, { useState } from 'react';
import { database } from './firebase'; // Correct import
import { ref, set, push } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function Write() {
  // const navigate = useNavigate(); // Uncomment if you plan to use navigate

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [options, setOptions] = useState(['']); // State to store options

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const saveData = async () => {
    try {
      const newDocRef = push(ref(database, 'IndiVue/polls'));
      await set(newDocRef, {
        name: inputValue1,
        question: inputValue2,
        options: options
      });
      alert('Poll Created Successfully');
    } catch (error) {
      console.error('Error writing to Firebase Database:', error);
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Create Poll</h2>
      <label htmlFor="name">Quiz Name</label>
      <input
        type='text'
        id="name"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <br /><br />
      <label htmlFor="question">Question</label>
      <input
        type='text'
        id="question"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <br /><br />
      
      
      <label>Options:</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={addOption}>+</button>
      <br /><br />


      <button onClick={saveData}>Create</button>
    </div>
  );
}

export default Write;
