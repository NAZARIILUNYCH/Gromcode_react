import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'off',
    };
  }

  changeBtn = () =>
    this.state.value === 'off' ? this.setState({ value: 'on' }) : this.setState({ value: 'off' });

  render() {
    return (
      <button className="toggler" onClick={() => this.changeBtn()}>
        {this.state.value}
      </button>
    );
  }
}

export default Toggler;
