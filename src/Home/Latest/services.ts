import { LatestItem } from './types';

const latestMockData: LatestItem[] = [
  {
    id: '1',
    title: 'Ancient zombie behir',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
    image: 'https://picsum.photos/200/134',
    tag: 'Dragons',
  },
  {
    id: '2',
    title: 'Ancient zombie behir',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
    image: 'https://picsum.photos/200/134',
    tag: 'Vampires',
  },
  {
    id: '3',
    title: 'Ancient zombie behir',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
    image: 'https://picsum.photos/200/134',
    tag: 'Dragons',
  },
  {
    id: '4',
    title: 'Ancient zombie behir',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
    image: 'https://picsum.photos/200/134',
    tag: 'Vampires',
  },
  {
    id: '5',
    title: 'Ancient zombie behir',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    author: {
      name: 'Uthal Wordpainter Thuliaga',
      image: `https://avatars.dicebear.com/api/male/${Math.random()}.svg`,
    },
    date: new Date(),
    timeToRead: '8 min read',
    image: 'https://picsum.photos/200/134',
    tag: 'Dragons',
  },
];

export function getLatestAPI(): Promise<LatestItem[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(latestMockData);
    }, 2000);
  });
}
