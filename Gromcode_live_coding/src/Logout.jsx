import React from 'react';

// input (props): function
// output: JSX
const Logout = ({ onLogout }) => (
  <button className="logout btn" onClick={onLogout}>
    Logout
  </button>
);

export default Logout;
