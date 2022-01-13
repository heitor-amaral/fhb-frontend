import React from 'react';
import { Link } from 'react-router-dom';
import {
  AsideContainer,
  HeaderContainer,
  LinkButton,
  LogoContainer,
  LogoImage,
} from './styles';

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage />
      </LogoContainer>

      <AsideContainer>
        <Link to="/login">
          <LinkButton style={{ marginRight: 20 }}>Sign In</LinkButton>
        </Link>
      </AsideContainer>
    </HeaderContainer>
  );
}

export default Header;
