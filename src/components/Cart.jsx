import React from "react"
import styled from "styled-components"
import { removeItem, resetCart } from "../slices/cartReducer"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"
import { useAuth0 } from "@auth0/auth0-react"
import LoginIcon from '@mui/icons-material/Login'
import { formatPrice } from '../utils/helpers'

const Cart = () => {
  const products = useSelector((state) => state.cart.products)
  console.log(products)

  const dispatch = useDispatch()

  const { user, loginWithRedirect } = useAuth0()


  const totalPrice = () => {
    let total = 0
    products.forEach((item) => {
      total += item.quantity * item.price;
    })
    return total.toFixed(2)
  }


 
  return (
    <Wrapper>     
    <div className="section section-center">
      <h3>Products in your cart</h3>
      {products?.map((item) => (
        console.log(item),
        <div key={item.id}>
        <div className="title">
          <h4 className="name">{item.name}</h4>
          <img src={item.image[0].url} alt={item.name} /> 
        </div>
        <div className="item">
          <div className="item-content">
          <div className="price"><h4>Price: {item.price}</h4></div>
          <div className="size"><h4>Size: {item.size}</h4></div>
          <div className="quantity"><h4>Qty: {item.quantity}</h4></div>
          <div className="subtotal"><h4>Subtotal: ${(item.price * item.quantity).toFixed(2)}</h4></div> 
          </div> 
          <div className="item-clear">
            <button type="button" className="link-btn clear-btn" onClick={()=>dispatch(removeItem(item.id))}><DeleteIcon/></button>
          </div>              
        </div>
        </div>     
      ))}
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>        
      </div>   
      <div className="total">
        <div className="total-display"><h3>Total: {totalPrice()}</h3></div>
        {user? (
           <button className="checkout-btn" >PROCEED TO CHECKOUT</button> 
        ) : ( <button type="button" className="auth-btn" onClick={loginWithRedirect}>
        Login <LoginIcon />
      </button>
    )}
       
      </div> 
      <div className="reset-container">
      <button className="reset" onClick={() => dispatch(resetCart())}>Empty cart</button>   
      </div> 
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  
  .section {
    width: 40%;
  }

  h3 {
    text-align: center;
  }

  .title {
    margin: 2rem 0;
    color: var(--clr-primary-1)
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .item-clear {
    align-self: start;
  }

  .link-container {
    display: flex;
    justify-content: end;
    margin-top: 2rem;
  }

  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-black);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }

  .clear-btn {
    background: var(--clr-black);
  }

  .total {
    display: felx;
    align-items: center;
    justify-content: space-between;
    margin: 3rem 0;
  }

  .checkout-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-red-dark);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  
  .reset {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-2);
    width: 10rem;
    height: 3rem;
    border-radius: var(--radius);
    font-size: 1rem;
    cursor: pointer;
  }

  .reset-container {
    display: flex;
    align-items: center;
    justify-content: center;

  }
  `

export default Cart