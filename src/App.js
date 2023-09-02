import React from 'react';
import './App.css';

import LoginSignup from './components/LoginSignup';
import ProductDetail from './components/ProductDetails';
import Products from './components/Products';
import { Routes, Route, Link } from 'react-router-dom'; 
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ShoppingCart from './components/cart';
import Checkout from './components/Checkout'; 
import { useCart } from './components/CartContext';
import OrderTrack from './components/OrderTrack';

function App() {
  const { cart, addToCart, removeFromCart, emptyCart } = useCart();
  useEffect(() => {
    document.title = 'Step & Stride'; 
  }, []);
  console.log(cart);
  return (
    <div className="App">
      <Navbar cartLength={cart.length} />
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
        <Route path="/checkout" element={<Checkout cart={cart} emptyCart={emptyCart}/>} /> 
        <Route path="/orders" element={<OrderTrack />} /> 

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
