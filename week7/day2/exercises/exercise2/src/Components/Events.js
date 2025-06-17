import React, { useState } from "react";

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`You typed: ${event.target.value}`);
    }
  };

  const toggleButton = () => {
    setIsToggleOn((prev) => !prev);
  };

  return (
    <div>
      <h2>Click Event</h2>
      <button onClick={clickMe}>Click Me</button>

      <h2>KeyDown Event</h2>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type and press Enter" />

      <h2>Toggle Button</h2>
      <button onClick={toggleButton}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default Events;
