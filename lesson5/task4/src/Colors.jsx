import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyColor = color => {
    document.body.style.background = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          style={{ background: RED }}
          className="colors__button"
          onClick={() => this.setBodyColor(RED)}
        ></button>
        <button
          style={{ background: GREEN }}
          className="colors__button"
          onClick={this.setBodyColor.bind(this, GREEN)}
        ></button>
        <button
          style={{ background: BLUE }}
          className="colors__button"
          onClick={() => this.setBodyColor(BLUE)}
        ></button>
      </div>
    );
  }
}

export default Colors;
