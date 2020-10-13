import React from 'react';
import './rolling.css';

const RollingNumbers = ({ prev, price, callClass }) => {
  return (
    <h1 key={price} className={callClass}>
      {price}
    </h1>
  );
};

export default RollingNumbers;
