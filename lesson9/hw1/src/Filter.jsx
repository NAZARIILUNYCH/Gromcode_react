import React from 'react';

// Show counter find users & input text field
const Filter = ({ filterText, count, onChange }) => (
  <div className="filter">
    <span className="filter__count">{count}</span>
    <input type="text" className="filter__input" value={filterText} onChange={onChange} />
  </div>
);

export default Filter;
