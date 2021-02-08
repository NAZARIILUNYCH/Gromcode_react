import React from 'react';

const ExpandContent = ({ children, isOpen }) => {
  if (isOpen) {
    return <div className="expand__content">{children}</div>;
  }

  return null;
};

export default ExpandContent;
