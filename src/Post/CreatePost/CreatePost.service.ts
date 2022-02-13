import api from '../../App/app.service';

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

export function getArticlesThemeAPI() {
  return api.get('/article-themes');
}
