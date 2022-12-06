import { useState } from "react";
import CoinFlip from "./components/CoinFlip";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    setNumber(Math.floor(Math.random() * 2));
  };

  console.log(number);
  return (
    <div>
      <CoinFlip number={number} />
      <button onClick={handleClick}>Flip Me</button>
      <div>{`Out of ${counter} flips`}</div>
    </div>
  );
};

export default App;
