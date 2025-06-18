import React, { useState } from 'react';
import './Forms.css';

export default function Forms() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [errormessage, setErrorMessage] = useState('');
  const [description, setDescription] = useState('Type something...');
  const [selectedCar, setSelectedCar] = useState('Volvo');

  let header;

  if (username && age) {
    header = <h2 className="form-header">Hello {username}, you are {age} years old</h2>;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'age') {
      setAge(value);
      if (!Number(value)) {
        setErrorMessage('Your age must be a number');
      } else {
        setErrorMessage('');
      }
    }
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    if (!Number(age)) {
      setErrorMessage('Your age must be a number');
    } else {
      alert(`Submitted: ${username}, ${age}`);
    }
  };

  const handleTextarea = (event) => {
    setDescription(event.target.value);
  };

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };

  return (
    <div className="form-container">
      {header}
      <form onSubmit={mySubmitHandler} className="form-box">
        <label>Enter your name:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          className="input-field"
        />

        <label>Enter your age:</label>
        <input
          type="text"
          name="age"
          value={age}
          onChange={handleChange}
          className="input-field"
        />
        <div className="error">{errormessage}</div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <div className="section">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={handleTextarea}
          className="textarea"
        />
      </div>

      <div className="section">
        <label>Select your car:</label>
        <select value={selectedCar} onChange={handleCarChange} className="select">
          <option value="Volvo">Volvo</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Tesla">Tesla</option>
        </select>
        <p className="car-output">You selected: <strong>{selectedCar}</strong></p>
      </div>
    </div>
  );
}
