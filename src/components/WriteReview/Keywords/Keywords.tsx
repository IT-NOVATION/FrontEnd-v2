import FilmIcon from '@/ui/icons/FilmIcon';
import Keyword from './Keyword/Keyword';
import CameraIcon from '@/ui/icons/CameraIcon';
import NoteIcon from '@/ui/icons/NoteIcon';
import FaceIcon from '@/ui/icons/FaceIcon';

const story = [
  { icon: <FilmIcon />, name: '스토리가 좋아요', select: 'hasGoodStory' },
  { icon: <FilmIcon />, name: '작품성이 높아요', select: 'hasGoodProduction' },
  {
    icon: <FilmIcon />,
    name: '시나리오 소재가 참신해요',
    select: 'hasGoodScenario',
  },
];
const directing = [
  {
    icon: <CameraIcon />,
    name: '연출력이 좋아요!',
    select: 'hasGoodDirecting',
  },
  { icon: <NoteIcon />, name: 'OST가 좋아요', select: 'hasGoodOst' },
  {
    icon: <CameraIcon />,
    name: '영상미가 아름다워요',
    select: 'hasGoodVisual',
  },
];
const acting = [
  {
    icon: <FaceIcon />,
    name: '배우들의 연기가 훌륭해요',
    select: 'hasGoodActing',
  },
  {
    icon: <FaceIcon />,
    name: '캐릭터가 매력적이에요',
    select: 'hasGoodCharterCharming',
  },
  {
    icon: <FaceIcon />,
    name: '대사 전달이 정확해요',
    select: 'hasGoodDiction',
  },
];
export default function Keywords() {
  return (
    <div className="mt-[8px] border-y border-theme-gray w-full pt-[10px] pb-[19px] flex gap-[36px]">
      <div className="flex flex-col gap-[5px]">
        <p>스토리</p>
        <ul className="flex flex-col gap-[7px]">
          {story.map(({ icon, name, select }) => (
            <li key={name}>
              <Keyword icon={icon} name={name} select={select} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-[5px]">
        <p>연출</p>
        <ul className="flex flex-col gap-[7px]">
          {directing.map(({ icon, name, select }) => (
            <li key={name}>
              <Keyword icon={icon} name={name} select={select} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-[5px]">
        <p>연기</p>
        <ul className="flex flex-col gap-[7px]">
          {acting.map(({ icon, name, select }) => (
            <li key={name}>
              <Keyword icon={icon} name={name} select={select} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
