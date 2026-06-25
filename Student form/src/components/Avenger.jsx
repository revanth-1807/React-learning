import { useState } from "react";

let guest = 0;

function Cup() {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Re-render
      </button>

      <p>Count: {count}</p>

      <Cup />
      <Cup />
      <Cup />
    </>
  );
}