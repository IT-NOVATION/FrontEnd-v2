import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

export default function useOutsideClick(
  ref: MutableRefObject<HTMLDivElement | HTMLUListElement | null>,
  dropdownOpen: boolean,
  setDropdownOpen: Dispatch<SetStateAction<boolean>>
) {
  const clickModalOutside = (event: any) => {
    if (dropdownOpen && !ref.current?.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', clickModalOutside);
    return () => {
      document.removeEventListener('mousedown', clickModalOutside);
    };
  });
}
