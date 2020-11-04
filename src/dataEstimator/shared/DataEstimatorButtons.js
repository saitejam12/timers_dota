import React, { useState, useEffect } from 'react';

const CircButton = ({ handleClick, symbols }) => {
  return (
    <div className='circle-button symbol' onClick={handleClick}>
      {symbols ? '+' : '-'}
    </div>
  );
};
const DataEstimatorButtons = ({ value, handleChange }) => {
  const [number, setNumber] = useState(value);

  const numberUp = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const numberDown = () => {
    if (number !== 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
    if (number < 0) {
      setNumber(0);
    }
  };

  useEffect(() => {
    handleChange(number);
  }, [number]);

  const numChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className='buttons-panel'>
      <CircButton handleClick={numberDown} />
      <input value={number} />
      <CircButton handleClick={numberUp} symbols />
    </div>
  );
};

export default DataEstimatorButtons;
