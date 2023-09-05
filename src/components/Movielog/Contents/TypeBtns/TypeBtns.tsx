import { Dispatch, SetStateAction } from 'react';
import { contentsType } from '../Contents';

type Props = {
  type: contentsType;
  setType: Dispatch<SetStateAction<contentsType>>;
  reviewsCnt: number;
  interestedCnt: number;
};

export default function TypeBtns({
  type,
  setType,
  reviewsCnt,
  interestedCnt,
}: Props) {
  const changeTypeTo = (newType: contentsType) => {
    setType(newType);
  };
  console.log(type);
  return (
    <div className="w-full flex items-center">
      <button
        onClick={() => changeTypeTo('reviews')}
        className={`w-[50%] flex flex-col pt-[9px] text-theme-lightBlack text-body1 border-t-[1.5px] flex-col items-center ${
          type === 'interestedMovies'
            ? 'border-[#F5F5F7]'
            : 'border-theme-lightBlack'
        }`}
      >
        <span>리뷰</span>
        <span>{reviewsCnt}</span>
      </button>
      <button
        onClick={() => changeTypeTo('interestedMovies')}
        className={`w-[50%] flex flex-col pt-[9px] text-theme-lightBlack text-body1 border-t-[1.5px] flex-col items-center ${
          type === 'reviews' ? 'border-[#F5F5F7]' : 'border-theme-lightBlack'
        }`}
      >
        <span>관심영화</span>
        <span>{interestedCnt}</span>
      </button>
    </div>
  );
}
