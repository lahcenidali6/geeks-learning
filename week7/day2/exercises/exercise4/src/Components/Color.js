import React, { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", marginTop: "40px" }}>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default Color;
