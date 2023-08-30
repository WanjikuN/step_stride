import React, { useState } from 'react';
import './cart.css';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  const calculateTotalPrice = (cart) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <div className="shopping-cart">
      <div className="">
        <p className="logo">CART SUMMARY</p>
        <div>
          <i className="fas fa-cart-shopping"></i>
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
                  <li key={index}>
                      {item.name} <button onClick={() => removeFromCart(index)}>Delete</button>
                    {item.name}{' '}
                    
                  </li>
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
    </div>
  );
}

export default ShoppingCart;
