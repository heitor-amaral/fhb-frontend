import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FHBLogo from '../../assets/fhb_logo.png';

export const HeaderContainer = styled(Link)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: 0;
  max-width: 1192px;

  padding: 8px ${props => `${props.theme.defaultHorizontalPadding}px`};

  background-color: ${props => props.theme.colors.background};

  @media (max-width: 1016px) {
    padding: 8px ${props => `${props.theme.defaultHorizontalPadding / 2}px`};
  }
`;
export const LogoContainer = styled.div``;
export const LogoImage = styled.img.attrs({
  src: FHBLogo,
})``;
export const AsideContainer = styled.div``;
export const LinkButton = styled.a`
  color: ${props => props.theme.colors.secondary};
`;
