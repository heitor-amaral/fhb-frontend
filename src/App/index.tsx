import { ThemeProvider } from 'styled-components';
import Home from '../Home';
import GlobalStyle from './GlobalStyle';
import { light } from './themes';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
