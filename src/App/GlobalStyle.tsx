import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  body {
      font-family: sans-serif;
      font-size: 14px;
      color: ${props => props.theme.colors.text};
      background: ${props => props.theme.colors.background};
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
