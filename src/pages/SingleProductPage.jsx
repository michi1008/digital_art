import React, {useState} from "react"
import { useParams } from "react-router-dom"
import { useFetchSingleProductQuery } from "../slices/productAPI";
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../slices/cartReducer"
import { formatPrice } from '../utils/helpers'
import AddBoxIcon from "@mui/icons-material/AddBox"
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox"

const SingleProduct = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
 
  const { data, error, isLoading } =  useFetchSingleProductQuery(id)

  const [size, setSize] = useState("")
  const [price, setPrice] = useState(data?.small);

  const dispatch = useDispatch()

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          {data && (
            <img
              className="single-product-img"
              src={data?.image[0].url}
              alt={data?.name}
            />
          )}
          <div className="content">
            {data && (
                <>
                <h2>{data?.name}</h2>
                <div className="price-section">
                  <h4 className="sizeP">Small</h4>
                  <p className="price">
                    13" x 19" (33.02 x 48.26cm): <span>{formatPrice(data?.small)}</span>
                  </p>
                  <h4 className="sizeP">Medium</h4>
                  <p className="price">
                    18" x 24" (45.72 x 60.96cm): <span>{formatPrice(data?.medium)}</span>
                  </p>
                  <h4 className="sizeP">Large</h4>
                  <p className="price">
                    24" x 36" (60.96 x 91.44cm): <span>{formatPrice(data?.large)}</span>
                  </p>
                </div>
                  <div className="sizes">
                    <div>
                      <button data-size="small" className={`${size === "small"? "size-btn active":"size-btn"}`} onClick={()=>(setSize("small"), setPrice(formatPrice(data?.small)))}>Small</button>
                    </div>
                    <div>
                      <button data-size="medium" className={`${size === "medium"? "size-btn active":"size-btn"}`} onClick={()=>(setSize("medium"), setPrice(formatPrice(data?.medium)))}>Medium</button>
                    </div>
                    <div>
                      <button data-size="large" className={`${size === "large"? "size-btn active":"size-btn"}`} onClick={()=>(setSize("large"), setPrice(formatPrice(data?.large)))}>Large</button>
                    </div>
                  </div> </>)}
              <div className="amount-btns">
                <button type="button" className="amount-btn"
                  onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
                <IndeterminateCheckBoxIcon/>
                </button>
                <h3>{quantity}</h3>
                <button type="button" className="amount-btn" 
                onClick={() => setQuantity((prev) => prev + 1)}>
                  <AddBoxIcon /></button>
              </div>
            <div>
          <Link to="/cart" className="btn" onClick={
                          ()=> {
                            console.log(price)
                            dispatch(addToCart( {id:data.id,
                            image:data.image,
                            name:data.name,
                            price:price,
                            size:size,
                            quantity: quantity }))}}>Add To Cart</Link></div>
            </div>
    </div>
    </div>
    </Wrapper>
    )}
  
 
 
 
const Wrapper = styled.section`

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-1);
    font-size : 1.2rem;
  }
  .sizeP {
    font-weight: 700;
    color: var(--clr-red-dark)
  }

  .single-product-img {
  width:100%;
  display:block;
  object-fit:cover;
  border-radius:var(--radius)  
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
  .amount-btns{
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
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProduct