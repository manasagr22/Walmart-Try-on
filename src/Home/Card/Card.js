import React from 'react';
import "./Card.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // MUI Shopping Cart Icon
import SparkIcon from '../../assets/genaicon.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Hollow Heart Icon
import FavoriteIcon from '@mui/icons-material/Favorite'; // Filled Heart Icon

export default function Card({ product, onTryItNow, onAddToCart }) {
  const { image, cost, rating, deliveryDate, title, description, isInWishlist } = product;

  return (
    <div className="card-container">
      <div className="wishlist-icon">
        {isInWishlist ? (
          <FavoriteIcon className="filled-heart-icon" />
        ) : (
          <FavoriteBorderIcon className="hollow-heart-icon" />
        )}
      </div>
      <a href="#">
        <img className="card-image" src={image} alt={title} />
      </a>
      <div className="card-content">
        <div className="card-details">
          <p className="card-cost">₹{cost}</p>
          <div className="card-try-it-now" onClick={onTryItNow}>
            <img src={SparkIcon} alt="Spark Icon" className="custom-spark-icon" />
            <span>Try It Now</span>
          </div>
        </div>
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
        <div className="card-extra">
          <p className="card-rating">Rating: {rating}★</p>
          <p className="card-delivery">Delivery by: {deliveryDate}</p>
        </div>
        <div className="card-buttons">
          <a href="#" onClick={onAddToCart} className="card-btn add-to-cart-btn">
            Add to Cart
          </a>
          <a href="#" className="card-btn buy-btn">
            <ShoppingCartIcon className="cart-icon" />
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}