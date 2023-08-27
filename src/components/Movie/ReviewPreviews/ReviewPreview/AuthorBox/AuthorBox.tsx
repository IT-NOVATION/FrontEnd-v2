import { IReviewAuthor } from '@/interface/movie';
import ProfileImg from '@/ui/user/ProfileImg';
import Link from 'next/link';

type Props = {
  author: IReviewAuthor;
};

export default function AuthorBox({ author }: Props) {
  return (
    <Link href={`/movielog/${author.userId}`}>
      <div className="flex flex-col items-center gap-[5px] w-[100px] flex ">
        <div className="relative w-[65px] h-[65px] rounded-full">
          <ProfileImg src={author.userProfileImg} />
        </div>
        <p className="w-full text-center text-[16px] font-[500] truncate">
          {author.nickName}
        </p>
      </div>
    </Link>
  );
}
