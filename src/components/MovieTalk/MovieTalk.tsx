'use client';

import { useState } from 'react';
import BestReviews from './BestReviews/BestReviews';
import LatestReviews from './LatestReviews/LatestReviews';
import PopularUsers from './PopularUsers/PopularUsers';

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
    <div>
      <ul>
        {buttons.map(({ type, name }, i) => (
          <li key={name}>
            <button onClick={() => handleClick(type)}>{name}</button>
          </li>
        ))}
      </ul>
      {content === 'bestReviews' ? (
        <BestReviews />
      ) : content === 'latestReviews' ? (
        <LatestReviews />
      ) : (
        <PopularUsers />
      )}
    </div>
  );
}
