import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import index from './index.scss';

const rootElement = document.querySelector('#root');

const Greeting = props => {
  const getAge = moment().diff(props.birthDate, 'years');

  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I'm {getAge} years old
    </div>
  );
};

ReactDOM.render(
  <Greeting firstName="Nazar" lastName="Lunych" birthDate={new Date(2000, 1, 13).toString()} />,
  rootElement,
);

export default Greeting;
