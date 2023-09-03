import React, { useState } from 'react';
import { useNavigate, NavLink } from "react-router-dom"
import './cart.css';
import CartItem from './CartItem';
function ShoppingCart({ cart, removeFromCart,setCart }) {
      const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1);
    };
    const handleIncrease = (itemId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    };

    const handleDecrease = (itemId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(updatedCart);

    };

  return (

    <div className="shopping-cart">
      <div className="">

      <p id="back" onClick={handleGoBack} style={{fontSize:"30px",position:"absolute", marginLeft:"40px",marginTop:"40px",color:"white"}}>←<span style={{fontSize:"30px"}}>Back</span></p>

        <p className="logo">CART SUMMARY</p>
        <div>
          <i className="fas fa-cart-shopping"></i>
        </div>
      </div>
      
      <div className="container">
      <div className="head">
     
            <p>My Cart</p>
            
          </div>
          <div className="foot">
            
            <h2 id="total">Total: $ {calculateTotalPrice().toFixed(2)}</h2>
            {
            <NavLink to="/checkout" style={{color: "black"}}><h2>Proceed to Checkout</h2></NavLink> 
            }
            
          </div>
        <div className="sidebar">
        
          <div id="cartItem">
            {cart.length === 0 ? (
              <p>Your cart is empty</p> 
              

            ) : (

              <>
                  {cart.map((item, index) => (
                  <CartItem
                    key={index}
                    item={item}
                    handleDelete={removeFromCart}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease} 
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

          
