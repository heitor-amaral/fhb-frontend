import { useEffect, useState } from 'react';
import { Container, HeaderContainer } from './styles';

import Header from '../../shared/Header';
import { Article } from '../../Home/Home.service';
import { getPostsAPI } from './MyPosts.service';
import Latest from '../../Home/Latest';

export default function MyPosts() {
  const [posts, setPosts] = useState<Article[] | undefined>();

  useEffect(() => {
    const loadData = async () => {
      const response = await getPostsAPI();
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      const filteredData = response.filter(
        post => post.id_author === user.email,
      );
      setPosts(filteredData);
    };
    loadData();
  }, []);

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
        <Latest dataProps={posts} />
      </Container>
    </>
  );
}
