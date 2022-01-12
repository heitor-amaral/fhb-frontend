import React from 'react';
import Categories from './Categories';
import Header from './Header';
import Latest from './Latest';
import {
  BottomContainer,
  ContentContainer,
  HeaderContainer,
  HomeContainer,
  Line,
  Message,
  MessageContainer,
} from './styles';
import Trending from './Trending';

function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <ContentContainer>
        <MessageContainer>
          <Message>FHB. brewing your home content</Message>
        </MessageContainer>

        <Line />

        <Trending />

        <Line color="terciary" />

        <BottomContainer>
          <Latest />

          <Categories />
        </BottomContainer>
      </ContentContainer>
    </HomeContainer>
  );
}

export default Home;
