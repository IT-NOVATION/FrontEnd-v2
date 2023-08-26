import useHovered from '@/hooks/useHovered';
import DropdownIcon from '@/ui/icons/DropdownIcon';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { SearchType } from '../SearchBox';
import useOutsideClick from '@/hooks/useOutsideClick';

type Props = {
  searchType: SearchType;
  setSearchType: Dispatch<SetStateAction<SearchType>>;
};

export default function SearchDropdown({ searchType, setSearchType }: Props) {
  const userHover = useHovered();
  const movieHover = useHovered();
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useOutsideClick(dropdownRef, dropdownOpen, setDropdownOpen);

  const handleClick = () => {
    setDropdownOpen((prev) => !prev);
  };
  const handleItemClick = (selected: SearchType) => {
    setSearchType(selected);
    setDropdownOpen(false);
  };
  return (
    <>
      {dropdownOpen ? (
        <ul
          ref={dropdownRef}
          className="absolute top-[27px] w-[105px] bg-white shadow-[4px_4px_4px_0px_#ccc] z-[100]"
        >
          <li
            onMouseEnter={userHover.handleHover}
            onMouseLeave={userHover.handleLeave}
            onClick={() => handleItemClick('User')}
            className={`h-[50px] pl-[30px] text-body1 w-full text-center text-body1 flex gap-[5px] items-center cursor-pointer z-[51] ${
              userHover.isHovered && 'bg-[#f5f5f7]'
            }`}
          >
            유저 <DropdownIcon />
          </li>
          <li
            onMouseEnter={movieHover.handleHover}
            onMouseLeave={movieHover.handleLeave}
            onClick={() => {
              handleItemClick('Movie');
            }}
            className={`h-[50px] pl-[30px]  text-body1 text-center text-body1 flex gap-[5px] items-center cursor-pointer z-[51] ${
              movieHover.isHovered && 'bg-[#f5f5f7]'
            }`}
          >
            영화
          </li>
        </ul>
      ) : (
        <div
          onClick={handleClick}
          className="absolute w-[105px] h-[50px] pl-[30px] top-[27px] text-center text-body1 flex gap-[5px] items-center cursor-pointer "
        >
          {searchType === 'User' ? '유저' : '영화'}
          <DropdownIcon />
        </div>
      )}
    </>
  );
}
