import cs from 'classnames';
import { memo, ReactElement, useCallback, useEffect, useState } from 'react';

import useOutsideClick from '@/hooks/useOutsideClick'; //드롭다운 바깥쪽을 클릭했을 때, 닫아주는 custom hook

import styles from './dropdown.module.scss';

type SingleItem = string | number; //string이거나 number인 경우

interface ObjectItem {
  id: string | number;
  name: string | number;
  label: string | number;
  value: SingleItem;
}
/* ObjectItems들은 어떤 상황으로 봐야될까?,? 잘 모르게따..*/

export type DropdownItem = SingleItem | ObjectItem;

interface Props<T extends DropdownItem> {
  items: T[];
  selected: T;
}

const RefineItemType = <T extends SingleItem>(item: T): string => {
  if (typeof item === 'number') {
    return item.toString();
  } else {
    return item;
  }
};

const Dropdown = <T extends DropdownItem>({ items, selected }: Props<T>): ReactElement => {
  const [isOpen, setIsOpen] = useState('closed');
  const [label, setLabel] = useState('드롭다운 테스트');
  const [icon, setIcon] = useState('▼');

  useEffect(() => {});

  const onClickDrop = useCallback(() => {
    if (isOpen === 'closed') {
      setIsOpen('open');
      setIcon('▲');
    } else {
      setIsOpen('closed');
      setIcon('▼');
    }
  }, []);

  const onClose = useCallback(() => {
    setIsOpen('closed');
    setIcon('▼');
  }, []);

  const ref = useOutsideClick(onClose);

  const onChangeLabel = (text: string | number) => {
    let temp = RefineItemType(text);
    setLabel(temp);
    console.log(text);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.itemContainer} ref={ref}>
        <button type="button" className={styles.label} onClick={onClickDrop}>
          <text>{label}</text>
          <text>{icon}</text>
        </button>
        {items.map((item, index) => (
          <li key={`${item}_${index}`} className={cs(styles.itemWrapper, styles[isOpen])} onClick={() => onChangeLabel(items[index])}>
            {items[index]}
          </li>
        ))}
      </ul>

      <div>{label}</div>
    </div>
  );
};

export default memo(Dropdown);
