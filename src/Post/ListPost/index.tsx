import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  HeaderContainer,
  TitleWrapper,
  Title,
  ContentWrapper,
  Content,
} from './styles';

import Header from '../../shared/Header';
import { getPostAPI } from './ListPost.service';
import { Article } from '../../Home/Home.service';

export default function ListPost() {
  const { id } = useParams();
  const [post, setPost] = useState<Article | undefined>();

  useEffect(() => {
    const loadData = async () => {
      const response = await getPostAPI({ id });
      setPost(response);
    };
    loadData();
  });

  return (
    <>
      <HeaderContainer>
        <Header
          actionButton={[
            {
              title: '',
              navigateTo: '/',
            },
          ]}
        />
      </HeaderContainer>
      <Container>
        <TitleWrapper>
          <Title>{post?.title}</Title>
        </TitleWrapper>

        <ContentWrapper>
          <Content>{post?.content}</Content>
        </ContentWrapper>
      </Container>
    </>
  );
}
