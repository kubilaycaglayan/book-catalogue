import React from 'react';
import autoComplete from '../API/autoComplete';

const Query = () => {
  let timeOut;
  const handleInput = event => {
    const val = event.target.value;
    const callThis = () => {
      autoComplete(val)
        .then(
          response => console.log(response),
        );
    };

    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callThis();
    }, 700);
  };

  return (
    <input onChange={handleInput} />
  );
};

export default Query;
