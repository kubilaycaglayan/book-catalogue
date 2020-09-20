import React from 'react';

const Query = () => {
  let timeOut;
  const handleInput = event => {
    const val = event.target.value;
    const callThis = () => {
      console.log(val);
    }
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callThis();
    }, 500);
  };

  return (
    <input onChange={(event) => {handleInput(event)}} />
  );
};

export default Query;
