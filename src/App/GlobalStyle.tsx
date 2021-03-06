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

  a, button, a:visited, a:hover, a:active {
    text-decoration: none;
    cursor: pointer;
    color: inherit
  }

  textarea, input, button {
    outline: none;
    appearance: none;
    border: none;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
