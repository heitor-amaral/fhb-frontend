import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dot from '../../shared/Dot';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { Article, getTrendingArticlesAPI } from '../Home.service';
import {
  TrendingContainer,
  TrendingHeader,
  TrendingImage,
  TrendingTitle,
  TrendingContent,
  TrendingItemContainer,
  IndexNumberContainer,
  IndexNumber,
  TrendingItemContent,
  TrendingItemContentHeader,
  TrendingItemContentHeaderImage,
  TrendingItemContentHeaderText,
  TrendingItemContentTitleContainer,
  TrendingItemContentTitle,
  TrendingItemContentFooter,
  TrendingItemContentFooterText,
} from './styles';

function renderTrendingItem(data: Article[]) {
  if (!data.length) {
    return <h3>No trending topics...</h3>;
  }

  return (
    <>
      {data.map((value, index) => (
        <TrendingItemContainer
          to={`/post/${value.id_article}`}
          key={value.id_article}
        >
          <IndexNumberContainer>
            <IndexNumber>{index + 1}</IndexNumber>
          </IndexNumberContainer>

          <TrendingItemContent>
            <TrendingItemContentHeader>
              <TrendingItemContentHeaderImage
                src={`https://avatars.dicebear.com/api/male/${Math.random()}.svg`}
              />
              <TrendingItemContentHeaderText>
                {value.id_author.split('@')[0]}
              </TrendingItemContentHeaderText>
            </TrendingItemContentHeader>

            <TrendingItemContentTitleContainer>
              <TrendingItemContentTitle>{value.title}</TrendingItemContentTitle>
            </TrendingItemContentTitleContainer>

            <TrendingItemContentFooter>
              <TrendingItemContentFooterText>
                {value.createdAt}
              </TrendingItemContentFooterText>
              <Dot />
              <TrendingItemContentFooterText>
                {Number(Math.random() * 50 + 1).toFixed(0)} minutes
              </TrendingItemContentFooterText>
            </TrendingItemContentFooter>
          </TrendingItemContent>
        </TrendingItemContainer>
      ))}
    </>
  );
}

function Trending() {
  const [data, setData] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getTrendingArticlesAPI();
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <TrendingContainer>
      <TrendingHeader>
        <TrendingImage />
        <TrendingTitle>TRENDING ON FHB</TrendingTitle>
      </TrendingHeader>

      <TrendingContent>
        {isLoading ? <LoadingSpinner /> : renderTrendingItem(data)}
      </TrendingContent>
    </TrendingContainer>
  );
}

export default Trending;
