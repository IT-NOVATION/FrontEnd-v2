import {
  getBestReviews,
  getLatestReviews,
  getPopularUsers,
} from '@/service/movieTalk';
import { useQuery } from '@tanstack/react-query';
import { MovieTalkContentsType } from '../MovieTalk';
import { IMovieTalkUser } from '@/interface/user';
import User from './User/User';

type Props = {
  content: MovieTalkContentsType;
};

export default function Users({ content }: Props) {
  const { data: users } = useQuery<IMovieTalkUser[]>(
    ['movieTalk', `${content}`],
    content === 'bestReviews'
      ? getBestReviews
      : content === 'latestReviews'
      ? getLatestReviews
      : getPopularUsers
  );
  return (
    <ul>
      {users &&
        users.map((user, idx) => (
          <User
            user={user}
            key={user.userId}
            isLast={idx === users.length - 1}
          />
        ))}
    </ul>
  );
}
