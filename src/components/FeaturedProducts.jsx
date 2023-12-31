import React from "react"
import { useDispatch, useSelector} from 'react-redux';
import { useFetchFeaturedProductQuery } from '../slices/productAPI'
import Product from "./Product"
import styled from "styled-components"
import Spinner from "./Spinner"

const FeaturedProducts = () => {
  const { data, error, isLoading } = useFetchFeaturedProductQuery();

  return (
    <Wrapper className="section">
    <div className="title">
      <h2>featured products</h2>
      <div className="underline"></div>
    </div>
    <div className="section-center featured">   
    {error ? "Something went wrong!" : isLoading? <Spinner/> : data?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-2);

  .featured {
    margin: 4rem auto;
    display: grid;    
    gap: 2.5rem;
    img {
      height: 300px;
    }
  }
  .title {
    color: var(--clr-white);
  }

  .underline {
    background-color: var(--clr-white);
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
export default FeaturedProducts