/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import Login from './login';
import Spinner from './Spinner';
import Logout from './Logout';

// algo
// 1. show Login by default +++++
// 2. show Spinner after Login click & hide Login +++++
// 3. show Logout after 2 sec, hide Spinner ++++++
// 4. show Login after Logout & hide Logout ++++++

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }

  loginHandler = () => {
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isProcessing: false,
      });
    }, 2000);
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;

    if (isProcessing) {
      return <Spinner size={50} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler}></Logout>;
    }

    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
//
