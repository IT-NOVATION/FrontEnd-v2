import { IReviewPage } from '@/interface/review';
import Image from 'next/image';
import Star from './Star/Star';
import Keywords from './Keywords/Keywords';
import MainText from './MainText/MainText';

type Props = {
  reviewData: IReviewPage;
};

export default function ReviewInfo({ reviewData }: Props) {
  return (
    <>
      <h1 className="mt-[60px] text-theme-lightBlack text-[50px] font-[300]">
        {reviewData.review.reviewTitle}
      </h1>
      <div className="flex mt-[38px] gap-[25px] text-theme-darkGray text-body4">
        <p>{reviewData?.movie.title}</p>
        <p>{reviewData?.review.createdDate}</p>
      </div>
      <section className="mt-[50px] flex gap-[26px]  pb-[35px] border-b-[1.5px] border-[#F5F5F7]">
        <Image
          src={reviewData.movie.movieImg}
          alt="포스터"
          width={164}
          height={236}
          className="w-[164px] h-[236px]"
        />
        <div className="flex flex-col">
          <h2 className="text-[24px] font-[300]">{reviewData.movie.title}</h2>
          <h3 className="mt-[5px] text-[#5e5e5eb5] text-[14px] font-[300]">
            {`${reviewData.movie.movieReleasedDate.split('-')[0]} ・ ${
              reviewData.movie.movieGenre
            } ・ ${reviewData.movie.movieCountry}`}
          </h3>
          <Star star={reviewData.review.star} />
          <Keywords review={reviewData.review} />
        </div>
      </section>
      <MainText text={reviewData.review.reviewMainText} />
    </>
  );
}
