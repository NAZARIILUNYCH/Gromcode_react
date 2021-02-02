import React from 'react';

const NumbersList = ({ numbers }) => (
  <div>
    {numbers.map(nums => (
      <li key={nums}>{nums}</li>
    ))}
  </div>
);

export default NumbersList;
