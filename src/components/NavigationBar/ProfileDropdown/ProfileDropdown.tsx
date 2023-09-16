import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import LogoutIcon from '@/ui/icons/LogoutIcon';
import ServiceIntroIcon from '@/ui/icons/ServiceIntroIcon';
import InquireIcon from '@/ui/icons/InquireIcon';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import serviceIntroImg from '../../../../public/images/service_intro.png';
import inquireImg from '../../../../public/images/inquire.png';
import useOutsideClick from '@/hooks/useOutsideClick';
import { logout } from '@/service/account';
import { useSetRecoilState } from 'recoil';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import { ModalState } from '@/interface/accountModal';

type Props = {
  dropdownOpen: boolean;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ProfileDropdown({
  dropdownOpen,
  setDropdownOpen,
}: Props) {
  const queryClient = useQueryClient();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const setModalState = useSetRecoilState(modalStateAtom);

  useOutsideClick(dropdownRef, dropdownOpen, setDropdownOpen);

  const handleLogout = async () => {
    // 로그아웃
    setModal(null);
    console.log('clicked');
    await logout();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    await queryClient.invalidateQueries();
  };
  const handleClick = (item: string) => {
    console.log('clicked');
    setModal(item);
  };

  return (
    <>
      <div className={styles.dropdownLayout} ref={dropdownRef}>
        <ul className="flex flex-col gap-y-[10px] ">
          <li
            onClick={handleLogout}
            className="flex items-center gap-[5px] cursor-pointer"
          >
            <LogoutIcon /> 로그아웃
          </li>
          <li
            onClick={() => handleClick('serviceIntro')}
            className="flex items-center gap-[5px] cursor-pointer"
          >
            <ServiceIntroIcon /> 서비스 소개
          </li>
          <li
            onClick={() => handleClick('inquire')}
            className="flex items-center gap-[5px] ml-[4px] cursor-pointer"
          >
            <InquireIcon /> 문의하기
          </li>
        </ul>
      </div>
      {modal && (
        <div className="bg-theme-modalBg overflow-y-hidden w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center items-center z-[48]">
          {modal === 'serviceIntro' ? (
            <Image
              alt="이미지"
              src={serviceIntroImg}
              className="w-[899px] h-[586px]"
            />
          ) : (
            <Image
              alt="이미지"
              src={inquireImg}
              className="w-[874px] h-[473px]"
            />
          )}
        </div>
      )}
    </>
  );
}
