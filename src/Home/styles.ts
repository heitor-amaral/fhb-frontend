import styled from 'styled-components';

export const HomeContainer = styled.main`
  display: flex;
  width: auto;

  flex-direction: column;

  background-color: ${props => props.theme.colors.background};
`;
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colors.primary};
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

interface LineProps {
  color?: 'primary' | 'secondary' | 'terciary';
}
export const Line = styled.div<LineProps>`
  width: 100%;
  border-bottom: 1px solid
    ${props =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary};
`;

export const MessageContainer = styled.section`
  width: auto;
  max-width: 700px;
  padding: 70px ${props => `${props.theme.defaultHorizontalPadding}px`};
`;
export const Message = styled.h2`
  text-align: center;
  font-size: 70px;
`;

export const BottomContainer = styled.section`
  display: flex;

  padding: 30px ${props => `${props.theme.defaultHorizontalPadding}px`};
  width: 100%;
  min-width: 0;
  max-width: 1192px;

  @media (max-width: 1016px) {
    padding: 30px ${props => `${props.theme.defaultHorizontalPadding / 2}px`};
  }

  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;
