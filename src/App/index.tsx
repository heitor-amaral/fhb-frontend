import { ThemeProvider } from 'styled-components';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import GlobalStyle from './GlobalStyle';
import { light } from './themes';
import Login from '../Login';
import SignUp from '../SignUp';
import CreatePost from '../Post/CreatePost';
import ListPost from '../Post/ListPost';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/post/:id" element={<ListPost />} />
          <Route path="/post/create" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
