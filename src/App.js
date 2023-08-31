// src/App.js
import React from 'react';
import './App.css';


import LoginSignup from './components/LoginSignup';
import ProductDetail from './components/ProductDetails';
import Products from './components/Products';
import {Routes, Route} from "react-router-dom";
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShoppingCart from './components/cart';
import { useCart } from "./components/CartContext";
function App() {
  const { cart, addToCart } = useCart();
  useEffect(() => {
    document.title = "Step & Stride"; // document title 
  }, []);
  console.log(cart);
  return (
    
      <div className="App">
        <Navbar cartLength={cart.length}/>
        
        
        <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
          <Route path="/products/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<ShoppingCart cart={cart}/>}/>
        </Routes>
        <Footer/>
        
      </div>
    
  );
}

export default App;
