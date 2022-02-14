import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 32px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

export const TitleWrapper = styled.div``;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  font-family: sans-serif;
  color: rgb(41, 41, 41);
`;

export const ContentWrapper = styled.div`
  width: 400px;
  margin-top: 32px;
`;

export const Content = styled.span`
  font-size: 24px;
  text-align: justify;
`;
