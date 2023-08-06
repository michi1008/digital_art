import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Content>
        {/* Your main content goes here */}
      </Content>
      <Wrapper>
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Ken Lange's digital art</span>
        </h5>
        <h5>&#160;All rights reserved</h5>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-1);
  text-align: center;
  margin-top: auto; /* Push the footer to the bottom */

  span {
    color: var(--clr-red-light);
  }

  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;