import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);

  function Step({ num }) {
    function handleDeduction() {
      setStepCount((stepCount) => stepCount - 1);
    }

    function handleAddition() {
      setStepCount((stepCount) => stepCount + 1);
    }

    return (
      <div>
        <button onClick={handleDeduction}>-</button>
        Step: {stepCount}
        <button onClick={handleAddition}>+</button>
      </div>
    );
  }

  function Count({ num }) {
    function handleDeduction() {
      setCount((count) => count - 1);
    }

    function handleAddition() {
      setCount((count) => count + 1);
    }

    return (
      <div>
        <button onClick={handleDeduction}>-</button>
        Count: {num}
        <button onClick={handleAddition}>+</button>
      </div>
    );
  }

  return (
    <>
      <Step />
      <Count num={count} />
    </>
  );
}
