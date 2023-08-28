import { IMovieTalkUser } from '@/interface/user';
import { getBestReviews } from '@/service/movieTalk';
import { useQuery } from '@tanstack/react-query';

export default function BestReviews() {
  const { data } = useQuery<IMovieTalkUser[]>(
    ['movieTalk', 'bestReviews'],
    getBestReviews
  );
  return <div></div>;
}
