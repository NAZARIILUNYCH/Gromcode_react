/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const users = [
  {
    id: 1,
    name: 'Test',
    age: 100,
  },
  {
    id: 2,
    name: 'Jack',
    age: 50,
  },
  {
    id: 3,
    name: 'Ann',
    age: 70,
  },
  {
    id: 4,
    name: 'John',
    age: 17,
  },
  {
    id: 5,
    name: 'Tom',
    age: 42,
  },
  {
    id: 6,
    name: 'Romelu',
    age: 27,
  },
  {
    id: 7,
    name: 'Serge',
    age: 23,
  },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
