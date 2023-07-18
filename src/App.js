import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(60);

  let timerId = useRef();
  console.log(timerId.current);
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  return (
    <div className="App">
      <p>{count}</p>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default App;
