import React from 'react';
import './HomePage.css';
import BuyerNavBar from '../nav-bar/buyer-nav-bar';


const HomePage = () => {
  return (
    <div>
      <BuyerNavBar />
      <div className="banner">
        <h1>Couture Taprobana</h1>
        <p>Each of our products starts with the finest material, hand chosen to ensure a range of high quality choices for our valued customers.</p>
      </div>

      <div className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="products">
          <div className="product">
            <img src="#" alt="Button Down Mini Dress" />
            <p>BUTTON DOWN MINI DRESS</p>
            <p>LKR 2000.00</p>
          </div>
          <div className="product">
            <img src="#" alt="Button Down Mini Dress" />
            <p>BUTTON DOWN MINI DRESS</p>
            <p>LKR 2000.00</p>
          </div>
          <div className="product">
            <img src="#" alt="Button Down Mini Dress" />
            <p>BUTTON DOWN MINI DRESS</p>
            <p>LKR 2000.00</p>
          </div>
          <div className="product">
            <img src="#" alt="Button Down Mini Dress" />
            <p>BUTTON DOWN MINI DRESS</p>
            <p>LKR 2000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;