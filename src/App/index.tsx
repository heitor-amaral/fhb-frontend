import { ThemeProvider } from 'styled-components';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import GlobalStyle from './GlobalStyle';
import { light } from './themes';
import Login from '../Login';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
