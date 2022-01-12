import { useEffect, useState } from 'react';
import Dot from '../../shared/Dot';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { getTrendindAPI } from './services';
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
import { TrendingItem } from './types';

function renderTrendingItem(data: TrendingItem[]) {
  if (!data.length) {
    return <h3>No trending topics...</h3>;
  }

  return (
    <>
      {data.map((value, index) => (
        <TrendingItemContainer key={value.id}>
          <IndexNumberContainer>
            <IndexNumber>{index + 1}</IndexNumber>
          </IndexNumberContainer>

          <TrendingItemContent>
            <TrendingItemContentHeader>
              <TrendingItemContentHeaderImage src={value.author.image} />
              <TrendingItemContentHeaderText>
                {value.author.name}
              </TrendingItemContentHeaderText>
            </TrendingItemContentHeader>

            <TrendingItemContentTitleContainer>
              <TrendingItemContentTitle>{value.title}</TrendingItemContentTitle>
            </TrendingItemContentTitleContainer>

            <TrendingItemContentFooter>
              <TrendingItemContentFooterText>
                {value.date.toDateString()}
              </TrendingItemContentFooterText>
              <Dot />
              <TrendingItemContentFooterText>
                {value.timeToRead}
              </TrendingItemContentFooterText>
            </TrendingItemContentFooter>
          </TrendingItemContent>
        </TrendingItemContainer>
      ))}
    </>
  );
}

function Trending() {
  const [data, setData] = useState<TrendingItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getTrendindAPI();
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
