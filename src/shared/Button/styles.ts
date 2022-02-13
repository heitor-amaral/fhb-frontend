import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;
  border-radius: 99em;
  color: ${props => props.theme.colors.quaternary};
  padding: 16px;
  margin-bottom: 16px;

  text-align: center;

  background-color: ${props => props.theme.colors.primary};
`;
