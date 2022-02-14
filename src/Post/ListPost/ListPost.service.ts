import api from '../../App/app.service';
import { Article } from '../../Home/Home.service';

type GetPostAPIProps = {
  id?: string;
};

export async function getPostAPI({ id }: GetPostAPIProps): Promise<Article> {
  return api.get(`/article/id?id_article=${id}`).then(({ data }) => data);
}
