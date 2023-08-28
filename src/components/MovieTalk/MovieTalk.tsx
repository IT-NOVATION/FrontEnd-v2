'use client';

import { useState } from 'react';
import Users from './Users/Users';

export type MovieTalkContentsType =
  | 'bestReviews'
  | 'latestReviews'
  | 'popularUsers';

const buttons: { type: MovieTalkContentsType; name: string }[] = [
  { type: 'bestReviews', name: '베스트 리뷰' },
  { type: 'latestReviews', name: '최신 리뷰' },
  { type: 'popularUsers', name: '인기 유저' },
];

export default function MovieTalk() {
  const [content, setContent] = useState<MovieTalkContentsType>('bestReviews');
  const handleClick = (type: MovieTalkContentsType) => {
    setContent(type);
  };
  return (
    <div className="mt-[25px] mb-[40px]">
      <ul className="flex gap-[90px]">
        {buttons.map(({ type, name }, i) => (
          <li key={name}>
            <button
              className={`text-body1 text-theme-lightBlack pb-[2px] ${
                content === type &&
                'text-theme-main text-title5 border-b border-theme-main'
              }`}
              onClick={() => handleClick(type)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      <Users content={content} />
    </div>
  );
}
