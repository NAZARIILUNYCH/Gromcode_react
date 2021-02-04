/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'online',
    };
  }

  componentDidMount() {
    const onlineStatus = () => {
      this.setState({
        status: 'online',
      });
    };

    const offlineStatus = () => {
      this.setState({
        status: 'offline',
      });
    };

    window.addEventListener('online', onlineStatus);
    window.addEventListener('offline', offlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineStatus);
    window.removeEventListener('offline', this.onlineStatus);
  }

  render() {
    if (navigator.onLine) {
      return <div className="status">{this.state.status}</div>;
    }

    return <div className="status status_offline">{this.state.status}</div>;
  }
}

export default ConnectionStatus;
