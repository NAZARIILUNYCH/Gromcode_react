import React, { Component } from 'react';
import ExpandContent from './ExpandContent';
import Arrow from './Arrow';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  handleBtn = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { title, children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>
          <button className="expand__toggle-btn" onClick={this.handleBtn}>
            <Arrow isOpen={this.state.isOpen} />
          </button>
        </div>
        <ExpandContent children={children} isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default Expand;
