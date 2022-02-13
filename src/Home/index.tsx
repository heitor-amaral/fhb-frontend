import React, { useEffect } from 'react';
import Categories from './Categories';
import Header from '../shared/Header';
import Latest from './Latest';
import {
  BottomContainer,
  ContentContainer,
  HeaderContainer,
  Container,
  Line,
  Message,
  MessageContainer,
} from './styles';
import Trending from './Trending';
import { Article, getTrendingArticlesAPI } from './Home.service';

function Home() {
  const [trendingArticles, setTrendingArticles] = React.useState<
    Article[] | undefined
  >();

  const actionButtonHeader = () => {
    const user = localStorage.getItem('user');

    return {
      title: user ? 'Create Post' : 'Login',
      navigateTo: '/post/create',
    };
  };

  return (
    <Container>
      <HeaderContainer>
        <Header actionButton={actionButtonHeader()} />
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
    </Container>
  );
}

export default Home;
