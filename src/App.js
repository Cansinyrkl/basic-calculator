import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(null);
  const [count2, setCount2] = useState(null);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState();

  const handleChange = (e) => {
    if (e.target.id === "count") {
      return setCount(e.target.value);
    } else if (e.target.id === "count2") {
      return setCount2(e.target.value);
    } else if (e.target.id === "operator") {
      return setOperator(e.target.value);
    }
  };

  useEffect(() => {
    if (operator === "+") {
      return setResult(Number(count) + Number(count2));
    } else if (operator === "-") {
      return setResult(count - count2);
    } else if (operator === "*") {
      return setResult(count * count2);
    } else if (operator === "/") {
      return setResult(count / count2);
    }
  }, [operator, count, count2]);
  console.log(result);
  return (
    <div className="App">
      <input type="number" id="count" onChange={handleChange}></input>
      <select name="example" id="operator" multiple onChange={handleChange}>
        <option value="+" selected>
          +
        </option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" id="count2" onChange={handleChange}></input>
      <div>{result}</div>
    </div>
  );
}

export default App;
