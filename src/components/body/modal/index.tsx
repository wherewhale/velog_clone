import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';

import ModalPortal from '@/utils/portal';

import BaseModal from './base';
import styles from './modal.module.scss';

interface Props {
  modalElement: ReactNode; //모달의 시작점을 받을 Element
  children: ReactNode; //모달의 Children으로 받을 매개체
}

const Modal = ({ modalElement, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false); //모달의 열린 상태를 관리할 state
  const [container, setContainer] = useState<Element | null>(null); //container 상태를 저장할 state 생성

  useEffect(() => {
    const newContainer = document.createElement('div'); //Next 특성인 SSR에서 document가 render되기 전에 선언
    newContainer.setAttribute('id', '#modal-root'); //따라서, container라는 명목을 가진 새로운 인자 생성 후 선언
    document.body.appendChild(newContainer); //이를 body에 넣어줌으로서, next에서 생길 수 있는 오류를 미리 해결

    setContainer(newContainer);

    return () => {
      const containerDOM = document.getElementById('#modal-root');
      containerDOM?.remove();
    };
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <div onClick={onOpen}>{modalElement}</div>
      {isOpen && (
        <ModalPortal container={container} key="transition-group-content">
          <BaseModal width={500} height={400} background="#fff" isOutClose={true} onClose={onClose}>
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
