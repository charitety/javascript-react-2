import React, { useState } from 'react';

export const DateFetcher = () => {
  let [date, setDate] = useState('Unknown'); //this initialize the useState hook
  const changeDate = () => {
    //this is a function to set the date and handle the change
    if (date === 'Unknown') {
        setDate(new Date().toUTCString());
    }else{
        setDate('Unknown')
    }
  };

  return (
    <div>
      <button onClick={() => changeDate()}>Push</button>UTC Date:{date}
    </div>
  );
};
