export interface TrendingItem {
  id: string;
  author: {
    image: string;
    name: string;
  };
  title: string;
  category?: string;
  date: Date;
  timeToRead: string;
}
