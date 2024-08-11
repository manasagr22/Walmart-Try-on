import React from 'react';
import './CartCard.css';

export default function CartCard({ item }) {
  return (
    <div className="cart-card">
      <img src={item.image} alt="Product" className="cart-card-image" />
      <div className="cart-card-info">
        <p className="delivery-date">{item.deliveryDate}</p>
        <p className="cost">₹{item.cost}</p>
      </div>
    </div>
  );
}
