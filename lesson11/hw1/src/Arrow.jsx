import React from 'react';

const Arrow = ({ isOpen }) => {
  if (!isOpen) {
    return <i className="fas fa-chevron-down"></i>;
  }

  return <i className="fas fa-chevron-up"></i>;
};

export default Arrow;
