'use-client';

import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import SearchWhiteIcon from '@/ui/icons/SearchWhiteIcon';
import Logo from '@/ui/icons/Logo';

const items = [
  {
    name: '무비서치',
    link: '/movie-search',
  },
  {
    name: '무비토크',
    link: '/movie-talk',
  },
];

export default function NavigationBar() {
  return (
    <nav className="flex items-center w-full min-w-[1100px] h-[85px] z-50 py-[20px] px-[50px] justify-between">
      <div className="flex items-center gap-[70px] ">
        <Link href="/">
          <Logo />
        </Link>
        {items.map(({ name, link }) => (
          <Link className="text-title5" key={name} href={link}>
            {name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-[30px]">
        <Link href="/search">
          <SearchWhiteIcon />
        </Link>
        <button className="w-[170px] h-[43px] rounded-[15px] bg-[#ffffff2] shadow-[3px_4px_2px_0px_#00000019,inset_0px_4px_4px_0px_#f6f6f6]">
          {'로그인 / 회원가입'}
        </button>
      </div>
    </nav>
  );
}
