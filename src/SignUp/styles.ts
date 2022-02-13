import styled from 'styled-components';

import FHBLogoBig from '../assets/fhb_logo_big.png';

export const Container = styled.main`
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
`;

export const LogoContainer = styled.div`
  margin-bottom: 32px;
`;
export const LogoImage = styled.img.attrs({
  src: FHBLogoBig,
})`
  width: 195px;
  height: 80px;
`;
export const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 28px;
`;
export const FormField = styled.div``;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
