import React from 'react';
import moment from 'moment';

const Greeting = props => {
  const getAge = moment().diff(props.birthDate, 'years');

  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {getAge} years old
    </div>
  );
};

export default Greeting;
