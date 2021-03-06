import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState('');

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }

  const changeHandler = e => {
    setInput(e.target.value);
  }

  return (
    <div className="counter">
      <h1 onClick={decrement}>-</h1>
      <h1>{count}</h1>
      <h1 onClick={increment}>+</h1>
      <input type='text' onChange={changeHandler} />
      <p>{input}</p>
    </div>
  );
}

export default Counter;