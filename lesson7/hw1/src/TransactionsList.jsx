/* eslint-disable import/no-unresolved */
import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => (
  <ul className="transactions">
    {transactions.map(elem => (
      <li key={elem.id} className="transaction">
        <Transaction {...elem} />
      </li>
    ))}
  </ul>
);

export default TransactionsList;
