import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);

  function Step() {
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

  function Count() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    function handleDeduction() {
      setCount((count) => count - stepCount);
    }

    function handleAddition() {
      setCount((count) => count + stepCount);
    }

    let message;
    if (count === 0) {
      message = "Today is ";
    } else if (count > 0) {
      message = `${count} days from today is `;
    } else {
      message = `${Math.abs(count)} days ago was `;
    }

    return (
      <div>
        <button onClick={handleDeduction}>-</button>
        Count: {count}
        <button onClick={handleAddition}>+</button>
        <p>
          <span>{message}</span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    );
  }

  return (
    <>
      <Step />
      <Count />
    </>
  );
}
