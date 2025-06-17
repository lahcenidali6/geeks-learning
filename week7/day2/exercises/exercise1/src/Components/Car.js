import  { useState } from "react";
import Garage from "./Garage";

function Car(props) {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h2>This car is a {color} {props.carInfo.model}</h2>
      <Garage size="small" />
    </div>
  );
}

export default Car;
