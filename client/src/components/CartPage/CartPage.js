// src/components/CartPage.js
import React, { useState } from 'react';
import './CartPage.css';
import SeekerNavBar from '../nav-bar/seeker-nav-bar';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "CLASSIC SEAMLESS WOMEN'S LONG SLEEVE TEE",
      description: "Heather Navy Blue / S",
      price: 4490,
      quantity: 1,
      image: "path_to_image_1"
    },
    {
      id: 2,
      name: "GLOBE SUPERSIZE TEE - UNISEX",
      description: "Grey / L",
      price: 3850,
      quantity: 1,
      image: "path_to_image_2"
    }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div> <SeekerNavBar width="100%"/>
    <div className="cart-page">
      <div className="cart-container">
        <h1>Your Cart</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>
                  <div className="product-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p className="product-name">{item.name}</p>
                      <p className="product-description">{item.description}</p>
                      <p className="product-price">LKR {item.price.toLocaleString()}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
                    <input type="text" value={item.quantity} readOnly />
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
                  </div>
                </td>
                <td>LKR {(item.price * item.quantity).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-summary">
          <textarea placeholder="Add a note to your order"></textarea>
          <div className="total-amount">
            <h2>LKR {totalAmount.toLocaleString()}</h2>
            <p>Taxes and shipping calculated at checkout.</p>
            <div className="cart-actions">
              <button className="update-btn">Update</button>
              <button className="checkout-btn">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartPage;
