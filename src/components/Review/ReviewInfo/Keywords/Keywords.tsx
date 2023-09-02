import { IMutateReview } from '@/interface/review';
import CameraIcon from '@/ui/icons/CameraIcon';
import FaceIcon from '@/ui/icons/FaceIcon';
import FilmIcon from '@/ui/icons/FilmIcon';
import NoteIcon from '@/ui/icons/NoteIcon';
import Keyword from './Keyword/Keyword';

type Props = {
  review: Omit<IMutateReview, 'movieId'> & {
    reviewId: number;
    createdDate: string;
  };
};

const story = [
  {
    icon: <FilmIcon color={'#AF35FE'} />,
    name: '스토리가 좋아요',
    select: 'hasGoodStory',
  },
  {
    icon: <FilmIcon color={'#AF35FE'} />,
    name: '작품성이 높아요',
    select: 'hasGoodProduction',
  },
  {
    icon: <FilmIcon color={'#AF35FE'} />,
    name: '시나리오 소재가 참신해요',
    select: 'hasGoodScenario',
  },
];
const directing = [
  {
    icon: <CameraIcon color={'#AF35FE'} />,
    name: '연출력이 좋아요!',
    select: 'hasGoodDirecting',
  },
  {
    icon: <NoteIcon color={'#AF35FE'} />,
    name: 'OST가 좋아요',
    select: 'hasGoodOst',
  },
  {
    icon: <CameraIcon color={'#AF35FE'} />,
    name: '영상미가 아름다워요',
    select: 'hasGoodVisual',
  },
];
const acting = [
  {
    icon: <FaceIcon color={'#AF35FE'} />,
    name: '배우들의 연기가 훌륭해요',
    select: 'hasGoodActing',
  },
  {
    icon: <FaceIcon color={'#AF35FE'} />,
    name: '캐릭터가 매력적이에요',
    select: 'hasGoodCharterCharming',
  },
  {
    icon: <FaceIcon color={'#AF35FE'} />,
    name: '대사 전달이 정확해요',
    select: 'hasGoodDiction',
  },
];

export default function Keywords({ review }: Props) {
  return (
    <ul className="flex flex-wrap gap-x-[25px] gap-y-[10px] mt-[15px]">
      {review.hasGoodStory && <Keyword keyword={story[0]} />}
      {review.hasGoodProduction && <Keyword keyword={story[1]} />}
      {review.hasGoodScenario && <Keyword keyword={story[2]} />}
      {review.hasGoodDirecting && <Keyword keyword={directing[0]} />}
      {review.hasGoodOst && <Keyword keyword={directing[1]} />}
      {review.hasGoodVisual && <Keyword keyword={directing[2]} />}
      {review.hasGoodActing && <Keyword keyword={acting[0]} />}
      {review.hasGoodCharterCharming && <Keyword keyword={acting[1]} />}
      {review.hasGoodDiction && <Keyword keyword={acting[2]} />}
    </ul>
  );
}
