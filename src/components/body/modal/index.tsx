import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';

import ModalPortal from '@/utils/portal';

import BaseModal from './base/BaseModal';
import styles from './modal.module.scss';

interface Props {
  width?: number;
  height?: number;
  isOutClose?: boolean; //기본값은 false
  background: string | 'none';
  modalElement: ReactNode; //모달의 시작점을 받을 Element
  children: ReactNode; //모달의 Children으로 받을 매개체
}

//newContainer의 key를 각각으로 넘겨서 구분짓는 소요가 필요할 수도 있겠다.

//CSSTransition을 제일 바깥으로 한 ModalPortal 컴포넌트 구성 => 그 밖에 PostModal을 만들어서 Props를 그대로 받는다.

const Modal = ({ width, height, isOutClose, background, modalElement, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false); //모달의 열린 상태를 관리할 state
  const [container, setContainer] = useState<Element | null>(null); //container 상태를 저장할 state 생성

  useEffect(() => {
    const newContainer = document.createElement('div'); //Next 특성인 SSR에서 document가 render되기 전에 선언
    newContainer.setAttribute('id', '#modal-root'); //따라서, container라는 명목을 가진 새로운 인자 생성 후 선언
    document.body.appendChild(newContainer); //이를 body에 넣어줌으로서, next에서 생길 수 있는 오류를 미리 해결

    //component 단에서 dynamic Import를 끄는 방법

    setContainer(newContainer);

    return () => {
      const containerDOM = document.getElementById('#modal-root');
      containerDOM?.remove();
    };
  }, []);

  const onClose = useCallback(() => {
    //onClose와 onOpen을 합쳐서, 함수를 구성하게 되면, 매개변수를 넣어야 하기 때문에, 새로 렌더링이 될 수도 있지 않을까?
    //TODO: 두 개를 선언할 것인가, 매개변수를 추가하여 하나로 구성하되, 새로 렌더링 되지 않도록 구성해야 할까?
    setIsOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <div onClick={onOpen}>{modalElement}</div>
      {/* isOpen을 없애도 돼유 => FIXME:  (추가로 ref 전달 사용은 최대한 지양해라 => component간 ref 전달은 최대한 지양하라고 독스에 나와있음. 굳이 쓰고 싶다면 ForwardRef를 써라.)*/}
      {isOpen && (
        <ModalPortal container={container} key="transition-group-content">
          <BaseModal width={width} height={height} background={background} isOutClose={isOutClose} onClose={onClose}>
            <button className={styles.icon} type="button" onClick={onClose}>
              <GrClose size={18} />
            </button>
            {children}
          </BaseModal>
        </ModalPortal>
      )}
    </>
  );
};

export default Modal;
