import React from 'react';
import './SideNav.css';
import CartCard from '../Card/CartCard';

export default function SideNav({ isOpen, onClose, cartItems }) {
  const totalCost = cartItems.reduce((total, item) => total + item.cost, 0);

  return (
    <div className={`sidenav ${isOpen ? 'sidenav-open' : ''}`}>
      <button onClick={onClose} className="close-btn">✕</button>
      <div className="sidenav-content">
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cartItems.map(item => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="total-section">
        <a 
          href="#"
          className="checkout-btn"
        >
          Checkout
        </a>
        <p className="total-cost">Total: ₹{totalCost}</p>
      </div>
    </div>
  );
}
