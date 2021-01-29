/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  reset() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <>
        <div class="counter">
          <button data-action="decrease" class="counter__button" onClick={this.decrement}>
            -
          </button>
          <span class="counter__value" onClick={() => this.reset()}>
            {this.state.counter}
          </span>
          <button data-action="increase" class="counter__button" onClick={this.increment}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
