import { useEffect, useState } from 'react';
import Dot from '../../shared/Dot';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { getLatestAPI } from './services';
import {
  LatestContainer,
  LatestItemContainer,
  LatestItemContent,
  LatestItemContentHeader,
  LatestItemContentHeaderImage,
  LatestItemContentHeaderText,
  LatestItemContentTitleContainer,
  LatestItemContentTitle,
  LatestItemContentSubTitle,
  LatestItemContentFooter,
  LatestItemContentFooterText,
  LastestItemImageContainer,
  LatestItemImage,
  LatestItemTagContainer,
  LatestItemTagText,
} from './styles';
import { LatestItem } from './types';

function renderLatestItem(data: LatestItem[]) {
  if (!data.length) {
    return <h3>No topics...</h3>;
  }

  return (
    <>
      {data.map(value => (
        <LatestItemContainer key={value.id}>
          <LatestItemContent>
            <LatestItemContentHeader>
              <LatestItemContentHeaderImage src={value.author.image} />
              <LatestItemContentHeaderText>
                {`${value.author.name}`}{' '}
                {value.category && `- ${value.category}`}
              </LatestItemContentHeaderText>
            </LatestItemContentHeader>

            <LatestItemContentTitleContainer>
              <LatestItemContentTitle>{value.title}</LatestItemContentTitle>
              {value.subtitle && (
                <LatestItemContentSubTitle>
                  {value.subtitle}
                </LatestItemContentSubTitle>
              )}
            </LatestItemContentTitleContainer>

            <LatestItemContentFooter>
              <LatestItemContentFooterText>
                {value.date.toDateString()}
              </LatestItemContentFooterText>
              <Dot />
              <LatestItemContentFooterText>
                {value.timeToRead}
              </LatestItemContentFooterText>
              {value.tag && (
                <>
                  <Dot />
                  <LatestItemTagContainer>
                    <LatestItemTagText>{value.tag}</LatestItemTagText>
                  </LatestItemTagContainer>
                </>
              )}
            </LatestItemContentFooter>
          </LatestItemContent>

          <LastestItemImageContainer>
            <LatestItemImage src={value.image} />
          </LastestItemImageContainer>
        </LatestItemContainer>
      ))}
    </>
  );
}

function Latest() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<LatestItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getLatestAPI();
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <LatestContainer>
      {isLoading ? <LoadingSpinner /> : renderLatestItem(data)}
    </LatestContainer>
  );
}

export default Latest;
