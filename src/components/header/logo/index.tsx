import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SiVelog } from 'react-icons/si';

import styles from './logo.module.scss';

interface Props {
  tag?: string;
}

const Logo = ({ tag }: Props) => {
  useEffect(() => {
    if (tag === undefined) {
      setLabel('velog');
    } else {
      setLabel(tag);
    }
  }, []);
  const [label, setLabel] = useState('');

  return (
    <div className={styles.container}>
      {tag && (
        <Link href="/">
          <SiVelog />
        </Link>
      )}
      {label}
    </div>
  );
};

export default Logo;
