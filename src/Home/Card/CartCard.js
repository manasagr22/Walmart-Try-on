import React from 'react';
import './CartCard.css';

export default function CartCard({ item}) {
  
  return (
    <div className="cart-card">
      <img src={item.img} alt={item.type} className="cart-card-image" />
      <div className="cart-card-info">
        <h3 className="cart-card-type">{item.type}</h3>
        <p className="cart-card-desc">{item.desc}</p>
        <p className="cart-card-price">
          ${item.price}<sup>{item.decimal}</sup>
        </p>
        <p className="cart-card-delivery">Delivery: {item.date}</p>
      </div>
    </div>
  );
}
