import { useEffect, useState } from 'react';

const useScrollEvent = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let mounted = true;
    window.addEventListener('scroll', () => {
      if (mounted) {
        console.log('이벤트 시작');
        setScrollY(window.pageYOffset);
      }
    });
    return () => {
      console.log('이벤트 종료');
      mounted = false;
    };
  }, []);

  return scrollY;
};

export default useScrollEvent;
