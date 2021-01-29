/* eslint-disable no-unused-expressions */
import React from 'react';
import moment from 'moment';

// algo
// 1. add location to component as props +++++
// 2. add location to getTimeWithOffset function as argument
// 3. result of function add to clock__time

// const formatDate = moment.format(new Date());

// input:
// output: date
const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = props => (
  <>
    <div className="clock">
      <div className="clock__location">{props.location}</div>
      <div className="clock__time">{}</div>
    </div>
  </>
);

export default Clock;
