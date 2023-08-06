import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFetchSingleProductQuery } from "../slices/productAPI";
import { formatPrice } from "../utils/helpers";

const SingleProductPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useFetchSingleProductQuery(id);

  console.log(data);

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          {data && (
            <img className="single-product-img" src={data.image[0].url} />
          )}
          <div className="content">
            {data && (
              <>
                <h3>{data?.name}</h3>
                <div className="price-section">
                  <p className="sizeP">Small</p>
                  <p className="price">
                    13" x 19" (33.02 x 48.26cm):{" "}
                    <span>{formatPrice(data?.small)}</span>
                  </p>
                  <p className="sizeP">Medium</p>
                  <p className="price">
                    18" x 24" (45.72 x 60.96cm):{" "}
                    <span>{formatPrice(data?.medium)}</span>
                  </p>
                  <p className="sizeP">Large</p>
                  <p className="price">
                    24" x 36" (60.96 x 91.44cm):{" "}
                    <span>{formatPrice(data?.large)}</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: min-content;

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-1);
    font-size: 0.8rem;
  }
  .sizeP {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--clr-red-dark);
  }

  .single-product-img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
  }
  .sizes {
    display: flex;
    align-items: space-between;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .size-btn {
    display: inline-block;
    width: 5rem;
    height: 2rem;
    border-radius: 10%;
    background: var(--clr-red-dark);
    color: var(--clr-white);
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    opacity: 1;
  }

  .btn {
    margin-top: 1rem;
    width: 12.5rem;
    text-align: center;
  }
  .amount-btns {
    display: grid;
    width: 8rem;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }

  h3 {
    margin-bottom: 0;
  }

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .sizeP {
      font-size: 1.25rem;
      font-weight: 700;
    }

    .price {
      font-size: 1.5rem;
    }
  }
`;

export default SingleProductPage;
