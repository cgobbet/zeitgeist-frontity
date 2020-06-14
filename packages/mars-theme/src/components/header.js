import { connect, styled } from "frontity";

import Link from "./link";
import MobileMenu from "./menu";
import Nav from "./nav";
import React from "react";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px 0 24px;
  color: #000; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  margin-bottom: 20px;
  color: rgba(0, 0, 0,);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
