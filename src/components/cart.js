import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './cart.css';
import OrderTrack from './OrderTrack';
import { NavLink } from 'react-router-dom';
function ShoppingCart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleGoBack = () => {
    navigate(-1);
  };


  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const calculateTotalPrice = (cart) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    
    <div className="shopping-cart">
      <div className="headercart">
      <p id="back" onClick={handleGoBack} style={{fontSize:"30px",position:"absolute"}}>←<span style={{fontSize:"30px"}}>Back</span></p>

        <p className="logo">CART SUMMARY</p>

        <div className="cart">
          <i className="fas fa-cart-shopping"></i>
          <p id="count">{cartItems.length}</p>
        </div>
      </div>
      <div className="container">
        <div className="sidebar">
          <div className="head">
            <p>My Cart</p>
            
          </div>
          <div id="cartItem">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="foot">
            <h3>Total</h3>
            <h2 id="total">$ {totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      </div>
      {/* <OrderTrack /> */}
      <div>
      {
            <NavLink to="/checkout" style={{color: "black"}}><h2>Proceed to Checkout</h2></NavLink> 

      }
    </div>
         
    </div>
    
  
  );
}

export default ShoppingCart;
