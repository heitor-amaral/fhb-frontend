import { useEffect, useState } from 'react';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { getCategoriesAPI } from './services';
import {
  CategoriesContainer,
  CategoriesTitle,
  CategoriesContent,
  CategoryItemContainer,
  CategoryItemText,
} from './styles';
import { Category } from './types';

function renderCategoryItem(data: Category[]) {
  if (!data.length) {
    return <h3>No categories...</h3>;
  }

  return (
    <>
      {data.map(value => (
        <CategoryItemContainer key={value.id}>
          <CategoryItemText>{value.name}</CategoryItemText>
        </CategoryItemContainer>
      ))}
    </>
  );
}
function Categories() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await getCategoriesAPI();
      setData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesTitle>Discover more of what matters to you</CategoriesTitle>
      <CategoriesContent>
        {isLoading ? <LoadingSpinner /> : renderCategoryItem(data)}
      </CategoriesContent>
    </CategoriesContainer>
  );
}

export default Categories;
