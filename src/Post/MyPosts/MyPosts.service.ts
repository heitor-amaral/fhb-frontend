import api from '../../App/app.service';
import { Article } from '../../Home/Home.service';

export async function getPostsAPI(): Promise<Article[]> {
  return api.get(`/article`).then(({ data }) => data);
}
