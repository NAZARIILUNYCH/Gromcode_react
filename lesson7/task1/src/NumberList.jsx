import React from 'react';

const NumberList = ({ numbers }) => {
  return (
    <div>
      {numbers.map(nums => (
        <li key={nums}>{nums}</li>
      ))}
    </div>
  );
};

export default NumberList;
