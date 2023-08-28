import { getLatestReviews } from '@/service/movieTalk';
import { useQuery } from '@tanstack/react-query';

export default function LatestReviews() {
  const { data } = useQuery(['movieTalk', 'latestReviews'], getLatestReviews);
  return <div></div>;
}
