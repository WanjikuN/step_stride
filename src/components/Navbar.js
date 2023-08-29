import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  background-color: green;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
`;

const Logo = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
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

const CartIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const LinksContainer = styled.div`
  margin-left: auto;
  display: flex;
`;

function Navbar() {
  return (
    <Nav>
      <Logo>
        <span>Step-Stride</span>
      </Logo>
      <LinksContainer>
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
      </LinksContainer>
      <CartIcon icon={faShoppingCart} size="lg" />
    </Nav>
  );
}

export default Navbar;
