/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }

  handleOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  handleOffline = () => {
    this.setState({
      status: 'offline',
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
    const { status } = this.state;
    const className = `status ${status === 'offline' ? 'status_offline' : ''}`;

    return <div className={className}>{status}</div>;
  }
}

export default ConnectionStatus;
