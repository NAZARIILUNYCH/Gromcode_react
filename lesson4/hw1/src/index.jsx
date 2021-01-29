/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './clock.scss';
import Clock from './Clock';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Clock location="London" />, rootElement);
