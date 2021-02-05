/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter';
import './index.scss';
import UsersList from './UsersList';

// algo
// 1. iterate the array with users +++++
// 2. filter an array
// 3. show all users, and show count of users

const rootElement = document.querySelector('#root');

const users = [
  {
    id: '1-id',
    name: 'Tom',
    age: 18,
  },
  {
    id: '2-id',
    name: 'John',
    age: 21,
  },
  {
    id: '3-id',
    name: 'Ann',
    age: 34,
  },
  {
    id: '4-id',
    name: 'Tomas',
    age: 26,
  },
  {
    id: '5-id',
    name: 'Rick',
    age: 63,
  },
  {
    id: '6-id',
    name: 'Morty',
    age: 31,
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
