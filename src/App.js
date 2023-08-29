// src/App.js
import React from 'react';
import './App.css';


import LoginSignup from './components/LoginSignup';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Products/>
        <LoginSignup/>
        <Footer/>
        
      </div>
    
  );
}

export default App;
