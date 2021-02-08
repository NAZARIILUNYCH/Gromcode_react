import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <Switch>
          <Router exact path="/">
            <Home />
          </Router>
          <Router exact path="/users" component={Users}></Router>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
