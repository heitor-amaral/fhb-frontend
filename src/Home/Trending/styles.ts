import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TrendingIcon from '../../assets/trending_icon.png';

export const TrendingContainer = styled.section`
  padding: 30px ${props => `${props.theme.defaultHorizontalPadding}px`};
  width: 100%;
  min-width: 0;
  max-width: 1192px;

  @media (max-width: 1016px) {
    padding: 30px ${props => `${props.theme.defaultHorizontalPadding / 2}px`};
  }
`;
export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;
`;
export const TrendingImage = styled.img.attrs({
  src: TrendingIcon,
})`
  margin-right: 10px;
`;
export const TrendingTitle = styled.h3``;
export const TrendingContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin: 0 -16px; */
`;

export const TrendingItemContainer = styled(Link)`
  display: flex;
  padding-right: 8px;
  min-width: 33.33%;
  margin-bottom: 24px;
  flex-wrap: wrap;

  text-decoration: none;
`;
export const IndexNumberContainer = styled.div`
  margin-right: 16px;
`;
export const IndexNumber = styled.span`
  color: ${props => props.theme.colors.terciary};
  font-size: 30px;
  font-weight: 700;
`;
export const TrendingItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TrendingItemContentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const TrendingItemContentTitleContainer = styled.div`
  margin-bottom: 8px;
`;
export const TrendingItemContentHeaderImage = styled.img.attrs({
  width: 20,
  height: 20,
})`
  margin-right: 8px;
`;
export const TrendingItemContentHeaderText = styled.h4``;

export const TrendingItemContentTitle = styled.h2``;

export const TrendingItemContentFooter = styled.div`
  display: flex;
  align-items: center;
`;
export const TrendingItemContentFooterText = styled.span``;
