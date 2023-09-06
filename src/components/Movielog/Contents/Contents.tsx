import { useState } from 'react';
import TypeBtns from './TypeBtns/TypeBtns';
import { IInterestedMovie } from '@/interface/movie';
import { IReviewPreview } from '@/interface/review';
import Reviews from './Reviews/Reviews';
import InterestedMovies from './InterestedMovies/InterestedMovies';

export type contentsType = 'reviews' | 'interestedMovies';

type Props = {
  reviews: IReviewPreview[];
  interestedMovie: IInterestedMovie[];
};

export default function Contents({ reviews, interestedMovie }: Props) {
  const [type, setType] = useState<contentsType>('reviews');

  return (
    <section className="flex flex-col gap-[27px] w-[900px] mx-auto mt-[70px] mb-[100px]">
      <TypeBtns
        type={type}
        setType={setType}
        reviewsCnt={reviews.length}
        interestedCnt={interestedMovie.length}
      />
      {type === 'reviews' ? (
        <Reviews reviews={reviews} />
      ) : (
        <InterestedMovies movies={interestedMovie} />
      )}
    </section>
  );
}
