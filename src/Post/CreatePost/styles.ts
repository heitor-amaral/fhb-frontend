import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: auto;

  background-color: ${props => props.theme.colors.background};
`;

export const Content = styled.div`
  display: flex;
  width: auto;

  flex: 1;
  justify-content: center;
  /* align-items: center; */

  /* background-color: red; */
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  max-width: 600px;

  margin-top: 32px;
`;
export const Title = styled.div``;
export const TitleInput = styled.input`
  width: 100%;

  padding: 16px 8px;
  font-size: 42px;
`;
export const Description = styled.div`
  margin-top: 16px;
`;
export const DescriptionInput = styled.textarea`
  height: 100vh;
  width: 100%;
  font-size: 42px;

  padding: 16px 8px;
`;

export const ThemeSelector = styled.div``;

export const ThemeSelectorInput = styled.select``;
