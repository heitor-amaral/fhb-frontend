import styled from 'styled-components';

export const CategoriesContainer = styled.section`
  display: flex;
  flex: 1;

  flex-direction: column;
  @media (max-width: 950px) {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${props => props.theme.colors.terciary};
  }
`;
export const CategoriesTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;

  margin-bottom: 16px;
`;
export const CategoriesContent = styled.section`
  display: flex;

  flex-wrap: wrap;
`;
export const CategoryItemContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px 16px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.secondary};

  margin-bottom: 8px;
  margin-right: 8px;
`;
export const CategoryItemText = styled.span``;
