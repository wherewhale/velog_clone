import cx from 'classnames';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import List from '../list';
import { TAB } from '../state';
import styles from './filter.module.scss';

const Filter: React.FC = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [tab, setTab] = useState('TRENDING');

  const [selectedTab, setSelectedTab] = useRecoilState(TAB);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const onClick = React.useCallback((tab: string) => {
    return () => {
      setTab(tab);
      setSelectedTab(tab);
    };
  }, []);

  //FIXME: 쿼리문 작성해서 보낼 때 필요한 데이터 형식으로 변경 필요

  return (
    <>
      {domLoaded && (
        <>
          <div className={styles.topContainer}>
            <div className={styles.rankContainer}>
              <div className={cx(styles.rankWrapper, { [styles.isSelected]: tab === 'TRENDING' })} onClick={onClick('TRENDING')}>
                트랜딩
              </div>
              <div className={cx(styles.rankWrapper, { [styles.isSelected]: tab === 'NEW' })} onClick={onClick('NEW')}>
                최신
              </div>
            </div>
            ...
          </div>
          <div className={styles.listContainer}>
            <List />
          </div>
        </>
      )}
    </>
  );
};

export default Filter;
