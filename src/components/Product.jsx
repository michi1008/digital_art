import React from "react"
import styled from "styled-components"
import { formatPrice } from "../utils/helpers"
import SearchIcon from "@mui/icons-material/Search"
import { Link } from "react-router-dom"

const Product = ({ product}) => {
  return <Wrapper>
    <div className="container">
      <img src={product?.image}/>
      <Link to={`/products/${product?.id}`} className="link" key={product?.id}>
        <SearchIcon/>
      </Link>
    </div>
    <footer>
      <h5>{product?.name}</h5>
      <p>{formatPrice(product?.small)}</p>
    </footer>
  </Wrapper>
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }

  img {
    width: 100%;
    height: 25rem;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-1);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }

  .container:hover .link {
    opacity: 1;
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer h5{
    color:var(--clr-primary-2)
  }
  
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-2);
    letter-spacing: var(--spacing);
  }
`
export default Product
