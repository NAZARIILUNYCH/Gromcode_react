/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
    };
  }

  setColor = color => {
    this.setState({
      color,
    });
  };

  resetColor = () => {
    this.setState({
      color: null,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setColor('Coral')}
            onMouseOut={this.resetColor}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setColor('Aqua')}
            onMouseOut={this.resetColor}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setColor('Bisque')}
            onMouseOut={this.resetColor}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
