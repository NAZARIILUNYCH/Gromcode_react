import React, { Component } from 'react';

const CartTitle = ({ userData, count }) => {
  return (
    <div className="cart-title">
      {userData.firstName}, you added {count} items
    </div>
  );
};

export default CartTitle;
