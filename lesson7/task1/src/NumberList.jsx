import React from 'react';

const NumberList = ({ numbers }) => (
  <div>
    {numbers.map(Login => (
      <li key={Login}>{Login}</li>
    ))}
  </div>
);

export default NumberList;
