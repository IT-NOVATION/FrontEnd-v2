import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import styles from './style.module.css';
import LogoutIcon from '@/ui/icons/LogoutIcon';
import ServiceIntroIcon from '@/ui/icons/ServiceIntroIcon';
import InquireIcon from '@/ui/icons/InquireIcon';
import { useQueryClient } from '@tanstack/react-query';

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

  const clickModalOutside = (event: any) => {
    if (dropdownOpen && !dropdownRef.current?.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);

    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });

  const handleLogout = async () => {
    // 로그아웃
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    await queryClient.invalidateQueries();
  };

  return (
    <div className={styles.dropdownLayout} ref={dropdownRef}>
      <ul className="flex flex-col gap-y-[10px]">
        <li onClick={handleLogout} className="flex items-center gap-[5px] ">
          <LogoutIcon /> 로그아웃
        </li>
        <li className="flex items-center gap-[5px] ">
          <ServiceIntroIcon /> 서비스 소개
        </li>
        <li className="flex items-center gap-[5px] ml-[4px] ">
          <InquireIcon /> 문의하기
        </li>
      </ul>
    </div>
  );
}
