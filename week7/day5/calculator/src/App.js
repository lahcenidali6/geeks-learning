import  { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
   const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = a + b;
        break;
      case "subtract":
        res = a - b;
        break;
      case "multiply":
        res = a * b;
        break;
      case "divide":
        if (b === 0) {
          setResult("Can't divide by zero");
          return;
        }
        res = a / b;
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
      style={{ padding: "15px" }}
    >
      <div
        className="p-4 bg-white rounded-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="mb-4 text-center fw-bold text-primary">
          Simple Calculator
        </h2>

        <div className="mb-3">
          <label htmlFor="num1" className="form-label fw-semibold">
            First Number
          </label>
          <input
            type="number"
            className="form-control form-control-lg rounded-pill border-primary"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            autoComplete="off"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="num2" className="form-label fw-semibold">
            Second Number
          </label>
          <input
            type="number"
            className="form-control form-control-lg rounded-pill border-primary"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            autoComplete="off"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="operation" className="form-label fw-semibold">
            Operation
          </label>
          <select
            className="form-select form-select-lg rounded-pill border-primary"
            id="operation"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="add">Addition (+)</option>
            <option value="subtract">Subtraction (-)</option>
            <option value="multiply">Multiplication ×</option>
            <option value="divide">Division ÷</option>
          </select>
        </div>

        <button
          className="btn btn-primary btn-lg w-100 rounded-pill fw-semibold shadow-sm"
          onClick={calculate}
          style={{
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0a58ca")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "")
          }
        >
          Calculate
        </button>

        {result !== null && (
          <div
            className={`alert mt-4 text-center ${
              typeof result === "number"
                ? "alert-success"
                : "alert-danger"
            } rounded-pill fs-5`}
            role="alert"
          >
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
}
