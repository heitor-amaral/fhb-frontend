import { TrendingItem } from './types';

const trendingMockData: TrendingItem[] = [
  {
    id: '1',
    title: 'Ancient zombie behir',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
  },
  {
    id: '2',
    title: 'Ancient zombie behir',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
  },
  {
    id: '3',
    title: 'Ancient zombie behir',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
  },
  {
    id: '4',
    title: 'Ancient zombie behir',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
  },
  {
    id: '5',
    title: 'Ancient zombie behir',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
  },
];

export function getTrendindAPI(): Promise<TrendingItem[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(trendingMockData);
    }, 2000);
  });
}
