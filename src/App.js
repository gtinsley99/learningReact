import "./App.css";
import { useState } from "react";

function App() {
  // This is the use state hook
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div>
        {toggle ? <h1>Hello</h1> : <h1>Goodbye</h1>}
        <button className={toggle ? "red" : "blue"} onClick={handleToggle}>
          Click Me
        </button>
        {/* Short Circuit Evaluation */}
        {toggle && (
          <div>
            <h3>This is a POPUP</h3>
            <p>Some cool text here</p>
          </div>
        )}
      </div>
      <div className="counter">
        {count >= 0 ? (
          <h1>Your number is positive</h1>
        ) : (
          <h1>Your number is negative</h1>
        )}

        <div className="counterBox">
          <button className="counterButton" onClick={decreaseCount}>
            -
          </button>
          <h2>{count}</h2>
          <button className="counterButton" onClick={increaseCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
