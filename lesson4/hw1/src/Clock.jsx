/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('LTS');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      localTime: formatDate(getTimeWithOffset(this.props.offset)),
    };

    setInterval(
      () =>
        this.setState({
          localTime: formatDate(getTimeWithOffset(this.props.offset)),
        }),
      1000,
    );
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.localTime}</div>
      </div>
    );
  }
}

export default Clock;
