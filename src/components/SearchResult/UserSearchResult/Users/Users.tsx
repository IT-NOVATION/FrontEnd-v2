import User from '@/components/MovieTalk/Users/User/User';
import { IMovieTalkUser } from '@/interface/user';
import { useRecoilSnapshot } from 'recoil';

type Props = {
  users: IMovieTalkUser[];
};

export default function Users({ users }: Props) {
  return (
    <ul className="w-full mt-[50px] flex flex-col">
      {users.map((user, idx) => (
        <User key={user.userId} user={user} isLast={idx === users.length - 1} />
      ))}
    </ul>
  );
}
