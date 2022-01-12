import React from 'react';
import {
  AsideContainer,
  HeaderContainer,
  LinkButton,
  LogoContainer,
  LogoImage,
} from './styles';

function Header() {
  function handleOnClickSignInButton() {
    return '';
  }
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage />
      </LogoContainer>

      <AsideContainer>
        <LinkButton style={{ marginRight: 20 }}>Sign In</LinkButton>
        <LinkButton>About</LinkButton>
      </AsideContainer>
    </HeaderContainer>
  );
}

export default Header;
