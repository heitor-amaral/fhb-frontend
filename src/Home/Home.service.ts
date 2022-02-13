import api from '../App/app.service';

export type Article = {
  id_article: number;
  id_author: string;
  id_theme: number;
  content: string;
  star_score: number;
  title: string;
  comment_count: number;
  createdAt: string;
  updatedAt: string;
};

export type ArticleTheme = {
  id_theme: number;
  name: string;
  description: string;
};

export function getTrendingArticlesAPI(): Promise<Article[]> {
  return api
    .get('/articles-op/trending?trend_count=5')
    .then(({ data }) => data);
}

export function getArticlesThemesAPI(): Promise<ArticleTheme[]> {
  return api.get('/article-themes').then(({ data }) => data);
}

export function getLastArticlesAPI(): Promise<Article[]> {
  return api.get('/articles-op/top-five').then(({ data }) => data);
}
