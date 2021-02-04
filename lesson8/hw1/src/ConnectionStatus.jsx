/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }

  onlineStatus = () => {
    this.setState({
      status: true,
    });
  };

  offlineStatus = () => {
    this.setState({
      status: false,
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.onlineStatus);
    window.addEventListener('offline', this.offlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineStatus);
    window.removeEventListener('offline', this.offlineStatus);
  }

  render() {
    return this.state.status ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}

export default ConnectionStatus;
