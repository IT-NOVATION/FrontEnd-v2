'use client';

import SearchDropdown from './SearchDropdown/SearchDropdown';
import SearchBigIcon from '@/ui/icons/SearchBigIcon';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PopularSearchTerms from './PopularSearchTerms/PopularSearchTerms';

export type SearchType = 'User' | 'Movie';
type Props = {
  initialType: SearchType;
};

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
      <PopularSearchTerms />
    </section>
  );
}
