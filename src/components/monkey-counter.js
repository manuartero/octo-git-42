import { useState } from "react";
import "./monkey-counter.css";
import { ReactComponent as HearNoEvilIcn } from '../assets/hear-no-evil.svg';

function MonkeyCounter({ init }) {
  const [n, setN] = useState(init || 0);

  const plusOne = () => setN((n) => n + 1);

  return (
    <div className="monkey-counter">
      <HearNoEvilIcn />
      <button onClick={plusOne}>{n}++</button>
    </div>
  );
}

export default MonkeyCounter;
