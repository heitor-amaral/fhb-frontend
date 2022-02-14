import { useEffect, useState } from 'react';
import Dot from '../../shared/Dot';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { Article, getLastArticlesAPI } from '../Home.service';
import {
  LatestContainer,
  LatestItemContainer,
  LatestItemContent,
  LatestItemContentHeader,
  LatestItemContentHeaderImage,
  LatestItemContentHeaderText,
  LatestItemContentTitleContainer,
  LatestItemContentTitle,
  LatestItemContentFooter,
  LatestItemContentFooterText,
  LatestItemImageContainer,
  LatestItemImage,
} from './styles';

function renderLatestItem(data: Article[]) {
  if (!data.length) {
    return <h3>No topics...</h3>;
  }

  return (
    <>
      {data.map(value => (
        <LatestItemContainer
          to={`/post/${value.id_article}`}
          key={value.id_article}
        >
          <LatestItemContent>
            <LatestItemContentHeader>
              <LatestItemContentHeaderImage
                src={`https://avatars.dicebear.com/api/male/${Math.random()}.svg`}
              />
              <LatestItemContentHeaderText>
                {value.id_author.split('@')[0]}
              </LatestItemContentHeaderText>
            </LatestItemContentHeader>

            <LatestItemContentTitleContainer>
              <LatestItemContentTitle>{value.title}</LatestItemContentTitle>
            </LatestItemContentTitleContainer>

            <LatestItemContentFooter>
              <LatestItemContentFooterText>
                {value.createdAt}
              </LatestItemContentFooterText>
              <Dot />
              <LatestItemContentFooterText>
                {Number(Math.random() * 50 + 1).toFixed(0)} minutes
              </LatestItemContentFooterText>
            </LatestItemContentFooter>
          </LatestItemContent>

          <LatestItemImageContainer>
            <LatestItemImage
              src={`https://picsum.photos/seed/${Math.random()}/200/300`}
            />
          </LatestItemImageContainer>
        </LatestItemContainer>
      ))}
    </>
  );
}

function Latest({ dataProps }: { dataProps?: Article[] }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getLastArticlesAPI();
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <LatestContainer>
      {isLoading ? <LoadingSpinner /> : renderLatestItem(dataProps || data)}
    </LatestContainer>
  );
}

export default Latest;
