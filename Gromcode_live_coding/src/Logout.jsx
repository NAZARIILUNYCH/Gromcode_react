import React from 'react';

// input: props -> func
// output: JSX
const Logout = ({ onLogout }) => (
  <button className="logout btn" onClick={onLogout}>
    Logout
  </button>
);

export default Logout;
