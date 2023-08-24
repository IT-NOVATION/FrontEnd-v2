import { useState } from 'react';

export default function useHovered() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };
  return { isHovered, handleHover, handleLeave };
}
