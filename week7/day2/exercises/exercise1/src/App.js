import Car from "./Components/Car";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div>
      <Car carInfo={carinfo} />
    </div>
  );
}

export default App;
