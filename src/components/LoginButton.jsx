import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from "styled-components";
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
        <Wrapper>
        <button className='btn' onClick={() => loginWithRedirect()}>
            Sing In
        </button>
        </Wrapper>
    )    
  )
}


const Wrapper = styled.section`
`

export default LoginButton