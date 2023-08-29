import './App.css';
import LoginSignup from './components/LoginSignup';
import ProductDetail from './components/ProductDetails';
import Products from './components/Products';
import {Routes, Route} from "react-router-dom";
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.title = "Step & Stride"; // document title 
  }, []);
  return (
    <div id="container">
    <Products />
    <LoginSignup />
    <Routes>
    <Route path="/products/:id" element={<ProductDetail/>}/>
    </Routes>
    </div>
  );
}

export default App;
