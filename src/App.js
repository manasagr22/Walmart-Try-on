import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar/Navbar';
import Home from './Home/Home';
import Payment from './Payment/Payment';
import img1 from './assets/cart_sample1.jpg';

function App() {
  // Define and initialize the cartItems state with a default value
  const [cartItems, setCartItems] = useState([
    {
      image: img1,
      date: "in 2 days", // Update to reflect delivery information
      price: "18", // Price as a string
      decimal: "89", // Decimal part of the price
      desc: "Iceglad Men's Casual Button Down Shirts Short Sleeve Shirts Vacation Beach Summer Hollow Out Tops", // Description of the product
      isInWishlist: true, // Wishlist status
      type: "Iceglad", // Product type
    },
  ]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar cartItems={cartItems}/>
            <Home cartItems={cartItems} setCartItems={setCartItems} />
          </>
        }/>
        <Route path="/cart" element={
          <>
            <Navbar cartItems={cartItems}/>
            <Payment/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
