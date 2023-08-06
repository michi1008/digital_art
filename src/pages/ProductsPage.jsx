import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import { useFetchProductsQuery } from "../slices/productAPI";

const ProductsPage = () => {
  const { data, error, isLoading } = useFetchProductsQuery();

  return (
    <Wrapper>
      <div className="products-container">
        {error ? (
          "Something went wrong!"
        ) : isLoading ? (
          <Spinner />
        ) : (
          data?.map((product) => <Product product={product} key={product.id} />)
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 3rem;
  img {
    height: 300px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default ProductsPage;
