import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LatestContainer = styled.section`
  display: flex;
  flex: 3;

  flex-direction: column;
`;
export const LatestItemContainer = styled(Link)`
  display: flex;
  margin-bottom: 24px;
  flex-wrap: wrap;

  @media (max-width: 705px) {
    margin-bottom: 48px;
  }
`;
export const LatestItemContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 20px;

  width: 300px;
`;
export const LatestItemContentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const LatestItemContentTitleContainer = styled.div`
  margin-bottom: 10px;
`;
export const LatestItemContentHeaderImage = styled.img.attrs({
  width: 20,
  height: 20,
})`
  margin-right: 8px;
`;
export const LatestItemContentHeaderText = styled.h4``;

export const LatestItemContentTitle = styled.h2``;
export const LatestItemContentSubTitle = styled.h3`
  margin-top: 4px;
  font-size: 16px;
  color: ${props => props.theme.colors.secondary};
`;

export const LatestItemContentFooter = styled.div`
  display: flex;
  align-items: center;
`;
export const LatestItemContentFooterText = styled.span`
  font-size: 13px;
`;

export const LatestItemImageContainer = styled.div``;
export const LatestItemImage = styled.img.attrs({
  width: 200,
  height: 134,
})``;

export const LatestItemTagContainer = styled.a`
  border-radius: 100px;
  padding: 2px 8px;
  background-color: ${props => props.theme.colors.quaternary};
`;
export const LatestItemTagText = styled.span`
  white-space: nowrap;
  font-size: 13px;
`;
