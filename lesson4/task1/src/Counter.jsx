import React, { Component } from 'react';

const counter = 0;

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }

  render() {
    return <div>{this.state.counter}</div>;
  }
}

export default Counter;
