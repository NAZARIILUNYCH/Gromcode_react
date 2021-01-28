import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// Algo
// 1. show Login by default +++
// 2. show Spinner after login click and hide login +++
// 3. show Logout after 2sec, hide Spinner +++
// 4. show Login after Logout click and hide Logout

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
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;

    if (isProcessing) {
      return <Spinner size={50} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }

    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
