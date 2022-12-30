import { useEffect } from 'react';
export const useClickDetect = (ref, isVisible, setIsVisible) => {
  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (!isVisible) return;
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isVisible]);
};
