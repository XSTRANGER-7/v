import React, { useState } from 'react';
import { database } from './firebase'; // Correct import
import { ref, set, push } from 'firebase/database';

function Write() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [options, setOptions] = useState([{ option: '', count: 0 }]); // State to store options

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index].option = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, { option: '', count: 0 }]);
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
      <label htmlFor="name">Poll Name</label>
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
      {Array.isArray(options) && options.map((optionObj, index) => (
        <div key={index}>
          <input
            type="text"
            value={optionObj.option}
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
