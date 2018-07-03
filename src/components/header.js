import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import googleLogo from '../images/google-logo.svg';

const HeaderWrapper = styled.div`
  background: #191970;
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 100px;
    }

  }
`;

const HeaderContainer = styled.div`
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
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.desc}</p>
    </nav>
  </HeaderWrapper>
)

export default Header;

