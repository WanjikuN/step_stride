// src/App.js
import React from 'react';
import './App.css';


import LoginSignup from './components/LoginSignup';
import Products from './components/Products';
import Navbar from './components/Navbar';


function App() {
  return (
    
      <div className="App">
        <Navbar />
      
        <Products/>
        <LoginSignup/>
        
      </div>
    
  );
}

export default App;
