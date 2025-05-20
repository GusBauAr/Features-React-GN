import { useState } from "react";

//este es una funcion normal
export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter: counter,
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};
