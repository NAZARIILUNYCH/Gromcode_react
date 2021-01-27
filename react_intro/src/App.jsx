/* eslint-disable import/no-unresolved */
import React from 'react';
import Auth from './Auth';
import Login from './login';
import Spinner from './Spinner';
import Logout from './Logout';

const App = () => (
  <div>
    <Auth></Auth>
    <Login></Login>
    <Logout></Logout>
    <Spinner size={50}></Spinner>
  </div>
);

export default App;
