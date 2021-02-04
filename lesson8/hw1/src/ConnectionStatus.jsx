/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'online',
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
    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  }

  render() {
    const { status } = this.state;
    const className = `status ${status === 'offline' ? 'status_offline' : ''}`;

    return <div className={className}>{status}</div>;
  }
}

export default ConnectionStatus;
