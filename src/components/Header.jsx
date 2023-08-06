import React from 'react'
import styled from "styled-components"
import img from "../assets/art.png"


const Header = () => {
  return (
    <Wrapper>
    <div className="image">
        <img src={img} alt="" />
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: auto;
        width: 100%;
    }
`
export default Header