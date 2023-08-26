import { useState, useEffect } from 'react';

export default function useNavBarAnimation() {
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const prev = position;
    window.addEventListener('scroll', () => {
      setPosition(window.scrollY);
      if (prev > window.scrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [position]);
  const variants = {
    animate: { y: 0, opacity: 1 },
    initial: { y: -80, opacity: 0.5 },
    exit: { y: -80, opacity: 0.5 },
  };
  return { isVisible, variants };
}
