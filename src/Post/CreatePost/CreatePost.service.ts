import api from '../../App/app.service';
import { ArticleTheme } from '../../Home/Home.service';

type CreatePostAPIProps = {
  idTheme: number;
  title: string;
  content: string;
};

export async function createPostAPI({
  idTheme,
  title,
  content,
}: CreatePostAPIProps) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (!user.email) return;

  await api.post('/post', {
    id_author: user.email,
    id_theme: idTheme,
    title,
    content,
  });
}

export function getArticlesThemeAPI(): Promise<ArticleTheme[]> {
  return api.get('/article-themes').then(({ data }) => data);
}
