import React from 'react';
import './SideNav.css';
import CartCard from '../Card/CartCard';
import { Link } from 'react-router-dom';

export default function SideNav({ isOpen, onClose, cartItems }) {
  // Calculate the total cost considering both the price and decimal part
  const totalCost = cartItems.reduce(
    (total, item) => total + parseFloat(item.price + '.' + item.decimal),
    0
  );

  const handleCheckoutClick = () => {
    onClose(); // Close the SideNav
  };

  return (
    <div className={`sidenav ${isOpen ? 'sidenav-open' : ''}`}>
      <button onClick={onClose} className="close-btn">✕</button>
      <div className="sidenav-content">
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartCard key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="total-section">
        <Link 
          to="cart"
          className="checkout-btn"
          onClick={handleCheckoutClick} // Close SideNav on Checkout click
        >
          Checkout
        </Link>
        <p className="total-cost">Total: ${totalCost.toFixed(2)}</p>
      </div>
    </div>
  );
}
