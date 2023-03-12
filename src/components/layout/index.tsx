import { ReactNode } from 'react';

import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
