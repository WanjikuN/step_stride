import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 20px;

  @media (max-width: 375px) { /* iPhone 12 width */
    padding: 10px;
  }
`;

const ContactForm = styled.form`
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 375px) { /* iPhone 12 width */
    max-width: 100%;
  }
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
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

const Message = styled.p`
  margin-top: 10px;
  color: green;
  font-weight: bold;
`;

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
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
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message:</Label>
          <TextArea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </FormField>
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>
      {messageSent && (
        <Message>Message received! We'll get back to you soon.</Message>
      )}
    </ContactContainer>
  );
}

export default Contact;
