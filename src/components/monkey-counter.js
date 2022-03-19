import { useState } from "react";
import "./monkey-counter.css";

function MonkeyCounter({ init }) {
  const [n, setN] = useState(init || 0);

  const plusOne = () => setN((n) => n + 1);

  return (
    <div className="monkey-counter">
      <span>{n}</span>
      <button onClick={plusOne}>+1</button>
    </div>
  );
}

export default MonkeyCounter;
