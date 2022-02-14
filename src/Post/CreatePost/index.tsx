import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../shared/Header';
import { createPostAPI, getArticlesThemeAPI } from './CreatePost.service';
import {
  Container,
  HeaderContainer,
  Content,
  Form,
  Title,
  TitleInput,
  Description,
  DescriptionInput,
  ThemeSelector,
  ThemeSelectorInput,
} from './styles';

export default function CreatePost() {
  const titleRef = useRef('');
  const contentRef = useRef('');
  const idThemeRef = useRef<number>();

  const navigate = useNavigate();

  const [articleThemes, setArticleThemes] = useState([]);

  async function handleSubmit() {
    const title = titleRef.current;
    const content = contentRef.current;
    const idTheme = idThemeRef.current;

    console.log({ title, content, idTheme });

    if (!title || !content || !idTheme) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      await createPostAPI({ idTheme, title, content });
      navigate('/');
      alert('Post criado com sucesso');
    } catch (err) {
      alert('Erro ao criar post');
    }
  }

  useEffect(() => {
    const callback = async () => {
      const response = getArticlesThemeAPI();
      const { data } = await response;

      setArticleThemes(data);
    };
    callback();
  });

  return (
    <>
      <HeaderContainer>
        <Header
          actionButton={{
            title: 'Publish',
            navigateTo: '/',
            onClick: handleSubmit,
          }}
        />
      </HeaderContainer>
      <Container>
        <Content>
          <Form>
            <Title>
              <TitleInput
                placeholder="Title"
                onChange={e => {
                  titleRef.current = e.target.value;
                }}
              />
            </Title>

            <ThemeSelector>
              <ThemeSelectorInput
                onChange={e => {
                  idThemeRef.current = Number(e.target.value);
                }}
              >
                {articleThemes.map((theme: any) => (
                  <option key={theme.id} value={theme.id}>
                    {theme.name}
                  </option>
                ))}
              </ThemeSelectorInput>
            </ThemeSelector>

            <Description>
              <DescriptionInput
                placeholder="Tell you story..."
                onChange={e => {
                  contentRef.current = e.target.value;
                }}
              />
            </Description>
          </Form>
        </Content>
      </Container>
    </>
  );
}
