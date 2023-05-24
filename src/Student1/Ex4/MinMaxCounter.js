import React, { useState } from "react";

export const MinMaxCounter = () => {
  let [counter, setCounter] = useState(0);
  let [min, setMin] = useState(0);
  let [max, setMax] = useState(0);

  const countTracker = (upDown) => {
    if (upDown === "Up") {
      setCounter(counter++);
      if (counter > max) {setMax(max++)}
    } else {
      setCounter(counter--);
      if (counter < min) {setMin(min++)}
    }
  };

  return (
    <div>
      <button onClick={() => countTracker("Down")}>Down</button>
      {counter}
      <button onClick={() => countTracker("Up")}>Up</button> 
      <br/>
      Min: {min}
      <br/>
      Max: {max}
    </div>
  );
};
