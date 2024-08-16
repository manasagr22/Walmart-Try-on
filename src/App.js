import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar/Navbar';
import Home from './Home/Home';
import Payment from './Payment/Payment';
import img from  './assets/img14.png';

function App() {
  // Define and initialize the cartItems state with a default value
  const [cartItems, setCartItems] = useState([
    {
      img: img,
      date: "in 2 days", // Update to reflect delivery information
      price: "20", // Price as a string
      decimal: "00", // Decimal part of the price
      desc: "Anime oversized Tshirt, Naruto Shippuden Tshirt", // Description of the product
      isInWishlist: true, // Wishlist status
      type: "Anime Oversized", // Product type
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
            <Payment cartItems={cartItems}/>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
