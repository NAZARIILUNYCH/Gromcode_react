/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const rootElement = document.querySelector('#root');

ReactDOM.render(<App location="New York" offset={-5} />, rootElement);
