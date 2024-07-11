// src/App.js
import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import ProductViewPage from './components/ProductViewPage/ProductViewPage';
import CartPage from './components/CartPage/CartPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ProductViewPage />
      <CartPage />
    </div>
  );
}

export default App;
