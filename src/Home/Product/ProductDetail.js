import React from 'react';
import { Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './ProductDetail.css';

export default function ProductDetail({ product, onClose, cartItems, setCartItems }) {
  console.log("PRoducts  in   [roduct details",  product)
  const handleAddToCart = () => {
    const existingProduct = cartItems.find(item => item.type === product.type && item.desc === product.desc);

    if (existingProduct) {
      // If the product is already in the cart, you can decide whether to update its quantity or just return
      // For simplicity, let's return since the UI does not currently handle quantities
      return;
    }

    // If the product is not in the cart, add it
    setCartItems([...cartItems, { ...product, quantity: 1 }]);

    // Close the product detail popup
    onClose();
  };

  return (
    <div className="product-detail-backdrop">
      <div className="product-detail-container">
        <IconButton onClick={onClose} className="close-button">
          <CloseIcon />
        </IconButton>
        <div className="image-gallery">
          <div className="selected-image">
            <img src={product.img} alt="Selected Product" />
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
