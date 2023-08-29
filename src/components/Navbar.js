import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  background-color: green;
  color: white;
  display: flex;
  justify-content: space-between; /* Align items at the start and end */
  align-items: center; /* Vertically center items */
  padding: 10px 20px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 30px;
  margin: 0;
  display: flex;
`;

const ListItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled(RouterLink)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>
        <FontAwesomeIcon icon={faShoppingCart} /> Step-Stride
      </Logo>
      <List>
        <ListItem>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/about">About</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contact">Contact</NavLink>
        </ListItem>
      </List>
    </Nav>
  );
}

export default Navbar;
