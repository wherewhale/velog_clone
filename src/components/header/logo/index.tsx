import { useEffect, useState } from 'react';

import styles from './logo.module.scss';

interface Props {
  tag?: string;
}

const Logo = ({ tag }: Props) => {
  useEffect(() => {
    if (tag === undefined) {
      setLabel('velog');
    }
  }, []);
  const [label, setLabel] = useState(tag);

  return <div className={styles.container}>{label}</div>;
};

export default Logo;
