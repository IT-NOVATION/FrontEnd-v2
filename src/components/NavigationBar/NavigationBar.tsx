'use client';

import Link from 'next/link';
import SearchWhiteIcon from '@/ui/icons/SearchWhiteIcon';
import Logo from '@/ui/icons/Logo';
import { useSetRecoilState } from 'recoil';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import { ModalState } from '@/interface/accountModal';
import useLoginState from '@/hooks/useLoginState';
import { motion } from 'framer-motion';
import AlarmIcon from '@/ui/icons/AlarmIcon';
import ProfileImg from '@/ui/user/ProfileImg';

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
  const setModalState = useSetRecoilState(modalStateAtom);
  const handleLoginClick = () => {
    setModalState(ModalState.LoginForm);
  };
  const { loginState, userId, profileImg } = useLoginState();
  return (
    <motion.nav className="flex items-center w-full min-w-[1100px] h-[85px] z-10 py-[20px] px-[50px] justify-between">
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
        {loginState ? (
          <>
            <AlarmIcon />
            <button className="w-[107px] h-[43px] rounded-[20px] bg-[#ffffff2] shadow-[3px_4px_2px_0px_#00000019,inset_0px_4px_4px_0px_#f6f6f6]">
              {'무비로그'}
            </button>
            <button className="rounded-full">
              <ProfileImg src={profileImg} size={42} />
            </button>
          </>
        ) : (
          <button
            onClick={handleLoginClick}
            className="w-[170px] h-[43px] rounded-[15px] bg-[#ffffff2] shadow-[3px_4px_2px_0px_#00000019,inset_0px_4px_4px_0px_#f6f6f6]"
          >
            {'로그인 / 회원가입'}
          </button>
        )}
      </div>
    </motion.nav>
  );
}
