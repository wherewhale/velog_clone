import React, { ReactNode, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './baseModal.module.scss';

//Portal 공부 + 사용

interface Props {
  width?: number;
  height?: number;
  isOutClose?: boolean;
  background?: string | 'none'; // background 색상을 넘겨주는 방법은 어떨까? 라는 생각으로 string 선택
  children: ReactNode; //노드를 넣는 것이 범용적으로 사용 가능하기 때문에 편리하다.
  // isOpen: boolean;
  onClose: () => void;
}

const BaseModal = ({ width, height, isOutClose, background, children, onClose }: Props) => {
  const [isOutClick, setIsOutClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (background !== 'none') {
      `${background}`; //background 설정
    }
    if (isOutClose === true) {
      setIsOutClick(true);
    }
    setIsOpen(true);
  }, [background, isOutClose]);

  const ModalStyles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const BackgroundStyle = {
    backgroundColor: `${background}`,
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames={{
        enter: styles.modalEnter,
        enterDone: styles.modalEnterDone,
      }}
      unmountOnExit
    >
      <aside className={styles.background} style={BackgroundStyle}>
        {isOutClick && <div className={styles.background} onClick={onClose} />}
        <div className={styles.container} style={ModalStyles}>
          {children}
        </div>
      </aside>
    </CSSTransition>
  );
};

export default BaseModal;
