import React from 'react';
import { Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './ProductDetail.css';

export default function ProductDetail({ product, image, onClose, cartItems, setCartItems }) {

  const handleAddToCart = () => {
    onClose();

    // Check if the product is already in the cart
    const existingProduct = cartItems.find(item => item.id === product.id);
    console.log("Exisitng sfw!!", existingProduct)

    // if (existingProduct) {
    //   // If the product is already in the cart, update the quantity
    //   setCartItems(cartItems.map(item =>
    //     item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    //   ));
    // } else {
      // If the product is not in the cart, add it with the image and quantity 1
      setCartItems([...cartItems, { ...product, image, quantity: 1 }]);
      console.log("Adedded newww:, ",cartItems)
    //}
  };

  return (
    <div className="product-detail-backdrop">
      <div className="product-detail-container">
        <IconButton onClick={onClose} className="close-button">
          <CloseIcon />
        </IconButton>
        <div className="image-gallery">
          <div className="selected-image">
            <img src={image} alt="Selected Product" />
          </div>
        </div>
        <div className="product-info">
          <Typography variant="h5" className="product-type">
            {product.type}
          </Typography>
          <Typography variant="h4" className="product-name">
            {product.name}
          </Typography>
          <Typography variant="body1" className="product-description">
            {product.desc}
          </Typography>
          <Typography variant="h6" className="product-price">
            <strong>Price: ${product.price}<sup>{product.decimal}</sup></strong>
          </Typography>
          <Typography variant="body2" className="product-delivery">
            Delivery: {product.date}
          </Typography>
          <div className="product-actions">
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<ShoppingCartIcon />}
              onClick={handleAddToCart}  // Add product to cart when clicked
            >
              Add to Cart
            </Button>
          </div>
          <IconButton className="wishlist-icon">
            {product.isInWishlist ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
