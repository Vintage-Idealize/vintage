import React, { useState } from 'react';
import './ProductViewPage.css';

const ProductViewPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [mainImage, setMainImage] = useState('/home-1.jpg'); // State for the main image

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const toggleWishlist = () => setWishlist(!wishlist);

  const changeMainImage = (image) => setMainImage(image); // Function to change the main image

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
          <div className="main-image">
            <img src={mainImage} alt="Main Product" />
          </div>
          <div className="thumbnail-images">
            <div 
              className={`thumbnail ${mainImage === '/home-1.jpg' ? 'selected' : ''}`} 
              onClick={() => changeMainImage('/home-1.jpg')}
            >
              <img src="/home-1.jpg" alt="Thumbnail 0" />
            </div>
            <div 
              className={`thumbnail ${mainImage === '/p1.jpg' ? 'selected' : ''}`} 
              onClick={() => changeMainImage('/p1.jpg')}
            >
              <img src="/p1.jpg" alt="Thumbnail 1" />
            </div>
            <div 
              className={`thumbnail ${mainImage === '/p2.jpg' ? 'selected' : ''}`} 
              onClick={() => changeMainImage('/p2.jpg')}
            >
              <img src="/p2.jpg" alt="Thumbnail 2" />
            </div>
            <div 
              className={`thumbnail ${mainImage === '/p3.jpg' ? 'selected' : ''}`} 
              onClick={() => changeMainImage('/p3.jpg')}
            >
              <img src="/p3.jpg" alt="Thumbnail 3" />
            </div>
          </div>
        </div>

        <div className="product-info">
          <h1>Lace Elegance</h1>
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
              <button>White</button>
            </div>
          </div>
          <p className="price">LKR 20000.00</p>
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
              <summary>SELLER INFORMATION</summary>
              <p>Information...</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
