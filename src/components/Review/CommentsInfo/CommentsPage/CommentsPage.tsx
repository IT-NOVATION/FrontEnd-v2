import Comment from './Comment/Comment';
import { IComment } from '@/interface/comments';

type Props = {
  comments: IComment[];
};

export default function CommentsPage({ comments }: Props) {
  return (
    <ul className="w-full flex flex-col">
      {[...comments].reverse().map((comment) => (
        <li key={comment.commentId}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}
