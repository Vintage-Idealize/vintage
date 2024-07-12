// src/components/ProductViewPage.js
import React, { useState } from 'react';
import './ProductViewPage.css';

const ProductViewPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const toggleWishlist = () => setWishlist(!wishlist);

  return (
    <div className="product-view-page">
      <header className="header">
        <nav>
          <a href="#">Logo</a>
          <a href="#">Home</a>
          <a href="#">New Arrivals</a>
          <a href="#">Clothing</a>
        </nav>
      </header>

      <div className="product-details">
        <div className="product-images">
          <div className="main-image"></div>
          <div className="thumbnail-images">
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
            <div className="thumbnail"></div>
          </div>
        </div>

        <div className="product-info">
          <h1>BUTTON DOWN MINI DRESS</h1>
          <div className="product-options">
            <div className="size-options">
              <span>Size</span>
              <button>UK6</button>
              <button>UK8</button>
              <button>UK10</button>
              <button>UK12</button>
              <button>UK14</button>
              <button>UK16</button>
            </div>
            <div className="color-options">
              <span>Color</span>
              <button>pink</button>
              <button>white</button>
            </div>
          </div>
          <p className="price">LKR 2000.00</p>
          <div className="quantity-control">
            <button onClick={decrementQuantity}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={incrementQuantity}>+</button>
          </div>
          <button className="add-to-cart">ADD TO CART</button>
          <p className="wishlist" onClick={toggleWishlist}>
            ❤️ {wishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
          </p>
          <div className="additional-info">
            <details>
              <summary>PRODUCT DETAILS</summary>
              <p>Details about the product...</p>
            </details>
            <details>
              <summary>ADDITIONAL INFORMATION</summary>
              <p>Additional information...</p>
            </details>
            <details>
              <summary>Seller</summary>
              <p>Information...</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
