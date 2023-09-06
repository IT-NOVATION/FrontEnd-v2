import { IFollowUser } from '@/interface/user';
import User from './User/User';

type Props = {
  users: IFollowUser[];
};

export default function Users({ users }: Props) {
  return (
    <section className="w-full h-[360px] mt-[17px] flex flex-col gap-[15px] px-[19px] mr-[19px] pb-[9px] overflow-y-scroll">
      {users.map((user) => (
        <User key={user.userId} user={user} />
      ))}
      {!users.length && (
        <h2 className="text-center text-body5">
          팔로우/팔로잉 중인 유저가 없습니다.
        </h2>
      )}
    </section>
  );
}
