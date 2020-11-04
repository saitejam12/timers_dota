import React from 'react';

const DataAmount = ({ dataAmount }) => {
  return (
    <div className='total-data'>
      Est <b>{dataAmount}GB</b> per Mo
    </div>
  );
};

export default DataAmount;
