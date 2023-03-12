import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
  onPageNumberChange?: () => void;
}

const InfiniteScroll = ({ children, onPageNumberChange }: Props) => {
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (target.current) {
      observer.observe(target.current);
    }
  }, []);

  const options = {
    threshold: 1.0,
  };

  const callback = () => {
    console.log('관측되었습니다.');
    onPageNumberChange;
  };

  return (
    <div>
      {children}
      <div ref={target} />
    </div>
  );
};

export default InfiniteScroll;
