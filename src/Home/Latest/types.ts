export interface LatestItem {
  id: string;
  author: {
    image: string;
    name: string;
  };
  title: string;
  subtitle?: string;
  category?: string;
  date: Date;
  timeToRead: string;
  tag?: string;
  image: string;
}
