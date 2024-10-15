// src/components/Cart/index.jsx
import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Giỏ hàng</h1>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price.toLocaleString()} VND
              </li>
            ))}
          </ul>
          <h2 className="cart-total">Tổng: {total.toLocaleString()} VND</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
