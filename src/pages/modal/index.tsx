import React from 'react';

import Modal from '@/components/body/modal';

import styles from './modalPage.module.scss';

const ModalTestPage = () => {
  return (
    <div className={styles.container}>
      <Modal modalElement={<div className={styles.button}>모달을 띄울깝쇼?</div>} closeButton={<div className={styles.button}>닫기</div>}>
        <div className={styles.modal}>
          <h1 className={styles.title}>잘 됐으면 좋겠다! 이미 잘 된 것 같다!</h1>
          <h2 className={styles.subTitle}>모달입니다.</h2>
          <div className={styles.content}>여기에 무언가 들어가면 좋겠죠?</div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalTestPage;
