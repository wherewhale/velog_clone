import React, { ReactNode, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './baseModal.module.scss';

//Portal 공부 + 사용

interface Props {
  width?: number;
  height?: number;
  isOutClose?: boolean;
  background: string | 'none'; // background 색상을 넘겨주는 방법은 어떨까? 라는 생각으로 string 선택
  children: ReactNode; //노드를 넣는 것이 범용적으로 사용 가능하기 때문에 편리하다.
  //isOpen: boolean;
  onClose: () => void; //onClose를 이렇게 쓰는 것 보다 MouseEvent 라고 포괄적으로 잡는 것이 낫다.
  //FIXME: MouseEventHandler<HTMLElemet> => 리턴문이 있거나 파라미터가 들어가는 경우가 있기 때문에, 범용성을 높이기 위해서 이렇게 쓰는 것이 좋다.
}

const BaseModal = ({ width, height, isOutClose, background, children, onClose }: Props) => {
  const [isOutClick, setIsOutClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false); //CSS transition을 사용하기 위한 state

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
      unmountOnExit //얘를 켜두면 isOpen이 꺼지고 나서, CSSTransition의 Element는 DOM Tree에서 사라진다 (개꿀)
    >
      <aside className={styles.background} style={BackgroundStyle}>
        {isOutClick && <div className={styles.background} onClick={onClose} />}
        {/* background => overlay라고 명명법을 바꾸고, 조금 더 커스텀이 편하게 해두는게 좋을 것 같다. */}
        <div className={styles.container} style={ModalStyles}>
          {children}
        </div>
      </aside>
    </CSSTransition>
  );
};

export default BaseModal;
