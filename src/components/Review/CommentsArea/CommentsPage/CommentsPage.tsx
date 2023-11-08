import Comment from './Comment/Comment';
import { IComment } from '@/interface/comments';

type Props = {
  comments: IComment[];
};

export default function CommentsPage({ comments }: Props) {
  return (
    <div className="w-full flex flex-col">
      {[...comments].reverse().map((comment) => (
        <div key={comment.commentId}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
}
