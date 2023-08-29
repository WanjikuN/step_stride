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


function App() {
  useEffect(() => {
    document.title = "Step & Stride"; // document title 
  }, []);
  return (
    
      <div className="App">
        <Navbar />
        <Products/>
        <LoginSignup/>
        <Routes>
          <Route path="/products/:id" element={<ProductDetail/>}/>
        </Routes>
        <Footer/>
        
      </div>
    
  );
}

export default App;
