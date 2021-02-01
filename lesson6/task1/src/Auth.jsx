/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Greeting from './Greeting';

class Auth extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <button className="btn logout" onClick={this.handleLogout}>
        Logout
      </button>
    ) : (
      <button className="btn login" onClick={this.handleLogin}>
        Login
      </button>
    );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;
