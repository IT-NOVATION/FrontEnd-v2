'use client';

import SearchDropdown from './SearchDropdown/SearchDropdown';
import SearchBigIcon from '@/ui/icons/SearchBigIcon';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export type SearchType = 'User' | 'Movie';
type Props = {
  initialType: SearchType;
};

const Keywords = [
  '엘리멘탈',
  '범죄도시3',
  '인어공주',
  '리바운드',
  '스즈메의 문단속',
  '더 퍼스트 슬램덩크',
];
export default function SearchBox({ initialType }: Props) {
  const router = useRouter();
  const [searchType, setSearchType] = useState<SearchType>('User');
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!value.length) {
      alert('검색어를 입력해 주세요');
    }
    router.push(`/search/${searchType}/${value}`);
  };

  return (
    <section className="absolute w-full left-0 top-[65px] h-[200px] bg-white flex flex-col items-center border-b ">
      <form onSubmit={handleSubmit} className="relative w-[900px]">
        <input
          className="border-b-2 border-black w-full pl-[160px] absolute top-[30px] pb-[5px] text-[30px] font-[400]"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <SearchDropdown searchType={searchType} setSearchType={setSearchType} />
        <button type="submit">
          <SearchBigIcon className="absolute right-[10px] top-[35px]" />
        </button>
      </form>
      <div className="mt-[70px]  w-[900px] flex">
        <div className="ml-[10px] w-[120px] h-[39px] bg-theme-gray rounded-[20px] flex justify-center items-center">
          인기 검색어
        </div>
        <ul className="flex flex-wrap gap-x-[43px] gap-y-[15px] items-center px-[35px] w-[600px]">
          {Keywords.map((keyword, idx) => (
            <li className="text-body2 text-theme-darkGray" key={idx}>
              # {keyword}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
