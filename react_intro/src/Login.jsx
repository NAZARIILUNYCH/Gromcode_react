import React from 'react';

// input (props): function
// output: JSX
const Login = props => (
  <button className="login btn" onClick={props.onLogin}>
    Login
  </button>
);

export default Login;
