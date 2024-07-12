import React from 'react';
import './HomePage.css';
import BuyerNavBar from '../nav-bar/buyer-nav-bar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <BuyerNavBar width="100%"/>
      <div className="banner">
        <h1>Couture Taprobana</h1>
        <p>Each of our products starts with the finest material, hand chosen to ensure a range of high quality choices for our valued customers.</p>
      </div>

      <div className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="products-container">
          <div className="products">
            <div className="product">
              <Link to="/productViewPage">
                <img src="/home-1.jpg" alt="Lace Elegance" />
                <p className="product-name">Lace Elegance</p>
                <p className="product-price">LKR 10000.00</p>
              </Link>
            </div>
            <div className="product">
              <img src="/home-2.jpg" alt="Vintage Charm" />
              <p className="product-name">Vintage Charm</p>
              <p className="product-price">LKR 20000.00</p>
            </div>
            <div className="product">
              <img src="/home-3.jpg" alt="Royal Silk" />
              <p className="product-name">Royal Silk</p>
              <p className="product-price">LKR 15000.00</p>
            </div>
            <div className="product">
              <img src="/home-4.jpg" alt="Bohemian Rhapsody" />
              <p className="product-name">Bohemian Rhapsody</p>
              <p className="product-price">LKR 12000.00</p>
            </div>
            <div className="product">
              <img src="/home-5.jpg" alt="Garden Bliss" />
              <p className="product-name">Garden Bliss</p>
              <p className="product-price">LKR 12000.00</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="designer">
        <h2>Shop by Designer</h2>
        <div className="products-container">
          <div className="products">
            <div className="product">
              <Link to="/sellerPage">
                <img src="/home-1.jpg" alt="Kaumadi Couture" />
                <p className="product-name">Kaumadi Couture</p>
              </Link>
            </div>
            <div className="product">
              <Link to="/sellerPage">
                <img src="/home-6.jpg" alt="Ceylon Threads" />
                <p className="product-name">Ceylon Threads</p>
              </Link>
            </div>
            <div className="product">
              <Link to="/sellerPage">
                <img src="/home-7.jpg" alt="Laksalu" />
                <p className="product-name">Laksalu</p>
              </Link>
            </div>
            <div className="product">
              <Link to="/sellerPage">
                <img src="/home-8.jpg" alt="Buddhi Batiks" />
                <p className="product-name">Buddhi Batiks</p>
              </Link>
            </div>
            <div className="product">
              <Link to="/sellerPage">
                <img src="/home-5.jpg" alt="Creative Couture" />
                <p className="product-name">Creative Couture</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
