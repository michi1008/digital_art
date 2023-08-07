import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from "styled-components";
const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Wrapper>
        <button className='btn' onClick={() => logout()}>
            Logout
        </button>
        </Wrapper>
    )    
  )
}
const Wrapper = styled.section`
`
export default LogoutButton