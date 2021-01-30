import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Off',
    };
  }

  changeBtn = () =>
    this.state.value === 'Off' ? this.setState({ value: 'On' }) : this.setState({ value: 'Off' });

  render() {
    return (
      <button className="toggler" onClick={() => this.changeBtn()}>
        {this.state.value}
      </button>
    );
  }
}

export default Toggler;
