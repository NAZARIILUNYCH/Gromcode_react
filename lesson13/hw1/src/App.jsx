/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const App = () => (
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users" component={Users} />
      </Switch>
    </div>
  </Router>
);

export default App;
