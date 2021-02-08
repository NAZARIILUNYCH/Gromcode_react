import React, { Component } from 'react';

class OddNumbers extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 1;
  }

  render() {
    return (
      <div class="number">
        <span class="number__title">{this.props.title}</span>
        <span class="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default OddNumbers;
