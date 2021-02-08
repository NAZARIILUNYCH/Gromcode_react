import React from 'react';
import Expand from './Expand';

const App = () => {
  return (
    <Expand title="Some text">
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    </Expand>
  );
};

export default App;
