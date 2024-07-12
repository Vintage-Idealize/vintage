// src/components/SellerPage.js
import React, { useState } from 'react';
import './SellerPage.css';
import BuyerNavBar from '../nav-bar/buyer-nav-bar';

const products = [
  { id: 1, name: "Lace Elegance", price: 10000, image: "/home-1.jpg" },
  { id: 2, name: "Vintage Charm", price: 20000, image: "/home-2.jpg" },
  { id: 3, name: "Royal Silk", price: 15000, image: "/home-3.jpg" },
  { id: 4, name: "Bohemian Rhapsody", price: 12000, image: "/home-4.jpg" },
  { id: 5, name: "Garden Bliss", price: 12000, image: "/home-5.jpg" },
];

const SellerPage = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [designerOpen, setDesignerOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);

  return (
    <div>
      <BuyerNavBar width="100%"/>
      <div className="seller-description">
        <h1>Kaumadi Couture</h1>
        <p>
        Kaumadhi Couture, a Sri Lankan artisanal clothing venture, creates enchanting bridal wear, sarees, and dresses using traditional beeralu lace. Handcrafted by skilled artisans, each piece blends time-honored techniques with contemporary aesthetics, celebrating Sri Lanka's rich cultural heritage. From custom-designed bridal sarees to elegant beeralu dresses, Kaumadhi offers timeless elegance and supports local artisans.
        </p>
      </div>

      <div className="content">
        <div className="filters">
          <h2 onClick={() => setCategoriesOpen(!categoriesOpen)}>Categories {categoriesOpen ? '-' : '+'}</h2>
          {categoriesOpen && (
            <ul>
              <li>Dresses</li>
              <li>Sarees</li>
            </ul>
          )}

          <h2 onClick={() => setDesignerOpen(!designerOpen)}>Designer {designerOpen ? '-' : '+'}</h2>
          {designerOpen && (
            <ul>
              <li>Kaumadi Couture</li>
            </ul>
          )}

          <h2 onClick={() => setColorOpen(!colorOpen)}>Color {colorOpen ? '-' : '+'}</h2>
          {colorOpen && (
            <ul>
              <li>Beige</li>
              <li>White</li>
            </ul>
          )}

          <h2 onClick={() => setSizeOpen(!sizeOpen)}>Size {sizeOpen ? '-' : '+'}</h2>
          {sizeOpen && (
            <ul>
              <li>UK 6</li>
              <li>UK 10</li>
              <li>UK 12</li>
            </ul>
          )}
        </div>

        <div className="products">
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <p className="product-name">{product.name}</p>
                <p className="product-price">LKR {product.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
