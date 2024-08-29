import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function Count({ num }) {
    return <div>Count: {num}</div>;
  }

  function handleDeduction() {
    setCount((count) => count - 1);
  }

  function handleAddition() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <button onClick={handleDeduction}>-</button>
      <Count num={count} />
      <button onClick={handleAddition}>+</button>
    </>
  );
}
