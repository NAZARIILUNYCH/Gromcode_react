import React from 'react';

const NumberList = ({ numbers }) => (
  <div>
    {numbers.map(nums => (
      <li key={nums}>{nums}</li>
    ))}
  </div>
);

export default NumberList;
