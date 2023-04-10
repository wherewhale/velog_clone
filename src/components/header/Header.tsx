import cx from 'classnames';
import { CSSProperties, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdMoon } from 'react-icons/io';

import styles from './header.module.scss';
import Logo from './logo';

interface Props {
  user?: string;
  isTop?: boolean;
  isScroll?: any;
}

const Header = ({ user, isTop, isScroll }: Props) => {
  const threshold = 5;
  const [headerOffset, setHeaderOffset] = useState(0);
  let lastScrollY = window.pageYOffset;

  const handleScrollEvent = () => {
    const currentScrollY = window.scrollY;
    if (lastScrollY < currentScrollY) {
      setHeaderOffset((prev) => (prev > -70 ? prev - threshold : -70));
    } else {
      setHeaderOffset((prev) => (prev - 0 < 0 ? prev + threshold : 0));
    }
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const HeaderStyles = {
    marginTop: `${headerOffset}px`,
  } as CSSProperties;

  return (
    <header className={cx(styles.container, { [styles.top]: isTop })} style={HeaderStyles}>
      <Logo tag={user} />
      <nav className={styles.navigation}>
        <IoMdMoon className={styles.icon} />
        <FiSearch className={styles.icon} />
        <div role="button" className={styles.button}>
          로그인
        </div>
      </nav>
    </header>
  );
};

export default Header;
