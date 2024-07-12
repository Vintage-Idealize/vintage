import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <nav>
          {/* <a href="#">Logo</a>
          <a href="#">Home</a>
          <a href="#">New Arrivals</a>
          <a href="#">Clothing</a> */}
        </nav>
      </header>

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