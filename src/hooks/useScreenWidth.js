import { useCallback, useEffect, useState } from 'react';

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 100);
    };
  }, []);

  useEffect(() => {
    const debouncedResize = handleResize();
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return screenWidth;
};
