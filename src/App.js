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
import Contact from './components/Contact';


function App() {
  useEffect(() => {
    document.title = "Step & Stride"; // document title 
  }, []);
  return (
    
      <div className="App">
        <Navbar />
        
        
        <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
          <Route path="/products/:id" element={<ProductDetail/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
        
      </div>
    
  );
}

export default App;
