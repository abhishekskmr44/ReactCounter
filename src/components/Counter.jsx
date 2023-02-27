import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <div className="counter-display">
        <div className="counter-digits">{count.toString().padStart(3, "0")}</div>
      </div>
      <div className="counter-buttons">
        <button onClick={decrementCount} disabled={count===0}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}


export default Counter