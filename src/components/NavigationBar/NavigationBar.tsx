'use client';

import Link from 'next/link';
import SearchWhiteIcon from '@/ui/icons/SearchWhiteIcon';
import Logo from '@/ui/icons/Logo';
import { useSetRecoilState } from 'recoil';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import { ModalState } from '@/interface/accountModal';
import useLoginState from '@/hooks/useLoginState';
import { motion, AnimatePresence } from 'framer-motion';
import AlarmIcon from '@/ui/icons/AlarmIcon';
import ProfileImg from '@/ui/user/ProfileImg';
import { useState } from 'react';
import ExitThinIcon from '@/ui/icons/ExitThinIcon';
import SearchBox from '../SearchBox/SearchBox';
import { usePathname } from 'next/navigation';
import useNavBarAnimation from '@/hooks/useNavBarAnimation';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';

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
  const pathname = usePathname();
  const setModalState = useSetRecoilState(modalStateAtom);
  const handleLoginClick = () => {
    setModalState(ModalState.LoginForm);
  };
  const { loginState, userId, profileImg } = useLoginState();
  const [isSearching, setIsSearching] = useState(false);
  const handleSearchClick = () => {
    setIsSearching(true);
  };
  const handleExitClick = () => {
    setIsSearching(false);
  };
  const { isVisible, variants } = useNavBarAnimation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.nav
          variants={variants}
          initial="initial"
          exit="exit"
          animate="animate"
          key="nav"
          transition={{ type: 'linear', duration: 0.5 }}
          className="fixed z-[19] bg-white flex items-center w-full min-w-[1100px] h-[85px] z-10 py-[20px] px-[50px] justify-between"
        >
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
            {isSearching ? (
              !pathname.includes('/search') && (
                <button onClick={handleExitClick}>
                  <ExitThinIcon />
                </button>
              )
            ) : (
              <button onClick={handleSearchClick}>
                <SearchWhiteIcon />
              </button>
            )}
            {loginState ? (
              <>
                <AlarmIcon />
                <Link href={`/movielog/${userId}`}>
                  <button
                    onClick={toggleDropdown}
                    className="w-[107px] h-[43px] rounded-[20px] bg-[#ffffff2] shadow-[3px_4px_2px_0px_#00000019,inset_0px_4px_4px_0px_#f6f6f6]"
                  >
                    {'무비로그'}
                  </button>
                </Link>
                <button
                  onClick={toggleDropdown}
                  className="rounded-full w-[42px] h-[42px] relative"
                >
                  <ProfileImg src={profileImg} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-[85px] right-[20px]">
                    <ProfileDropdown
                      dropdownOpen={dropdownOpen}
                      setDropdownOpen={setDropdownOpen}
                    />
                  </div>
                )}
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
          {isSearching && <SearchBox initialType="Movie" />}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
