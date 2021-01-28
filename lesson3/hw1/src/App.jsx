import React from 'react';
import Greeting from './Greeting.jsx';

const App = () => (
  <Greeting firstName="Nazar" lastName="Lunych" birthDate={new Date('2000-01-13')} />
);

export default App;
