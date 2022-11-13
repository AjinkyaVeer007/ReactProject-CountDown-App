import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [input, setInput] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const submit = () => {
    setCount(input);
    setDisabled(true);
    setInterval(() => {
      if (input >= 0) {
        setCount(input--);
      } else {
        setDisabled(false);
      }
    }, 500);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Count Down App</h1>
      <h1 className="counter">{count}</h1>
      <div className="InputSection">
        <input
          placeholder="Enter Countdown"
          type="number"
          value={input}
          disabled={disabled}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button onClick={submit}>Start Count</button>
      </div>
    </div>
  );
}

export default App;
