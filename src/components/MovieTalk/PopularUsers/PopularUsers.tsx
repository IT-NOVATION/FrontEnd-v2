import { getPopularUsers } from '@/service/movieTalk';
import { useQuery } from '@tanstack/react-query';

export default function PopularUsers() {
  const { data } = useQuery(['movieTalk', 'popularUsers'], getPopularUsers);
  return <div></div>;
}
