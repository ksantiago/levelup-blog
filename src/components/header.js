import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import googleLogo from '../images/google-logo.svg';

const HeaderWrapper = styled.div`
  background: #191970;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 60vh;
  h1 {
    img {
      height: 80px;
    }

  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`;

const Billboard = styled(Img)`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;


const Header = ({ data, siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img 
            src={googleLogo} 
            alt="Google Logo"
            style={{
              width: '150px'
            }}
          />
        </Link>
      </h1>

    </HeaderContainer>
    <Img 
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}
      sizes={data.background.sizes} 
    />
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
)

export default Header;

