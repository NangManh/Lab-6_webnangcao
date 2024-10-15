// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          <h1>MyStore</h1>
          <Link to="/cart">Giỏ hàng {cart.length}</Link>
        </header>

        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
