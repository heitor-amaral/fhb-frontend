import { Category } from './types';

const latestMockData: Category[] = [
  {
    id: '1',
    name: 'Adventures',
  },
  {
    id: '2',
    name: 'Locations',
  },
  {
    id: '3',
    name: 'Conditions',
  },
  {
    id: '4',
    name: 'Creatures',
  },
];

export function getCategoriesAPI(): Promise<Category[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(latestMockData);
    }, 2000);
  });
}
