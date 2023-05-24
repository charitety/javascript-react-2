import React, { useState } from 'react';

export const TenCounter = () => {
    let [counter, setCounter] = useState(0);
    const countUpTo10 = () => {
        setCounter(++counter);
        if (counter === 11) 
            setCounter(0)
    }
  return (
    <div>
        <button onClick={()=>countUpTo10()}>Push</button>Counter: {counter}
    </div>
  )
};
