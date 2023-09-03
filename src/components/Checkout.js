import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom"
import CartItem from './CartItem';

const CheckoutContainer = styled.div`
  padding: 40px;
`;

const CheckoutForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

function Checkout({emptyCart}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/submit-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, address, paymentMethod, paymentDetails }),
      });

      if (response.ok) {
        console.log("Order submitted successfully");
        
      } else {
        console.error("Failed to submit order");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
      navigate(-1);
    };
   const handleClick=()=>{
     emptyCart();
   } 
  return (
    <>
     <p id="back" onClick={handleGoBack} style={{fontSize:"30px",position:"absolute", marginLeft:"40px",marginTop:"40px",color:"black"}}>←<span style={{fontSize:"30px"}}>Back</span></p>
    <CheckoutContainer>
      
      <CheckoutForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="address">Address:</Label>
          <Input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="paymentMethod">Payment Method:</Label>
          <Select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="mpesa">M-Pesa</option>
            <option value="mastercard">Mastercard</option>
            
          </Select>
        </FormField>
      
        {paymentMethod === "mpesa" && (
          <FormField>
            <Label htmlFor="mpesaNumber">M-Pesa Number:</Label>
            <Input
              type="text"
              id="mpesaNumber"
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
              required
            />
          </FormField>
        )}
        {paymentMethod === "mastercard" && (
          <FormField>
            <Label htmlFor="cardNumber">Card Number:</Label>
            <Input
              type="text"
              id="cardNumber"
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
              required
            />
          </FormField>
        )}
        
        <SubmitButton type="submit" onClick={handleClick}>Place Order</SubmitButton>
      </CheckoutForm>
    </CheckoutContainer>
    </>
  );
}

export default Checkout;
