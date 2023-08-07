import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/logo.png";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  return (
    <Wrapper className="navbarContainer">
      <div className="left">
        <Link to="/" className="logo">
          <img src={img} alt="logo" />
        </Link>
        <button type="button" className="nav-toggle">
          <MenuSharpIcon />
        </button>
        <div className="navbarLinks">
          <div className="item">
            <Link to="/products">Products</Link>
          </div>
          <div className="item">
            <Link to="/about">About</Link>
          </div>
          <div className="item">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="center">
        <h2>Ken Lange's Digital Art</h2>
      </div>
      <div className="right">
        <div className="signin">
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
height: 5rem;
display: flex;
align-items: center;
justify-content: space-between;

h4 {
  font-size: 0.8rem;
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

img {
  width: 80px;
  margin-left: 1rem;
} 

.item {
  color: var(--clr-primary-1);
  font-size: 1.2rem;
  gap: 0.6rem;
}

.right {
  display: flex;
  margin-right: 2rem;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

.icon {
  gap: 1rem;
  color: var(--clr-primary-2);
  cursor: pointer;
}

.cartIcon {
  position: relative;
  display: flex;
}

span {
  font-size: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--clr-red-dark);
  color: var(--clr-white);
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-toggle {
  background: transparent;
  border: transparent;
  color: var(--clr-primary-2);
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
}
.navbarLinks {
  display: none;
}

@media screen and (min-width: 800px){
  background-color: var(--clr-primary-3);
  top: 0;
  z-index: 100;
  height: 7rem;
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  align-self: flex-start;
  color: var(--clr-primary-1);

  h4 {
    font-size: 1.2rem;
  }

  .navbarContainer{
    margin: 0 auto;
    width: 90vw;
    max-width: var(--max-width);
    }

  .nav-toggle {
    display: none;
  }

  .navbarLinks {
    display: flex;
    justify-content: start;
    li {
      margin: 0 0.5rem;
    }
    a {
      color: var(--clr-primary-1);
      font-size: 1.2rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid var(--clr-green);
      }
    } 



`;
export default Navbar;
