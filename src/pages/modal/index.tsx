import React from 'react';

import Modal from '@/components/body/modal';
import Tab from '@/containers/home/tab';

import styles from './modalPage.module.scss';

const ModalTestPage = () => {
  return (
    <div className={styles.container}>
      <Modal
        width={300}
        height={500}
        isOutClose={true}
        background="rgba(255,255,255,0.5)"
        modalElement={<div className={styles.button}>바깥 눌렀을 때 꺼지는 친구</div>}
      >
        <div className={styles.modal}>
          <h1 className={styles.title}>밖을 눌러보세요!</h1>
          <h2 className={styles.subTitle}>모달입니다.</h2>
          <div className={styles.content}>
            <strong className={styles.bold}>isOutClose</strong>는 <strong className={styles.bold}>Boolean</strong> 타입으로 바깥을 누를 시 꺼지는 여부를
            선택하는 친구입니다.
          </div>
        </div>
      </Modal>
      <Modal
        width={300}
        height={500}
        isOutClose={false}
        background="rgba(255,201,201,0.5)"
        modalElement={<div className={styles.button}>배경색상 선택여부</div>}
      >
        <div className={styles.modal}>
          <h1 className={styles.title}>배경 색이 쨍하죠?</h1>
          <h2 className={styles.subTitle}>모달입니다.</h2>
          <div className={styles.content}>
            <strong className={styles.bold}>background</strong>는 <strong className={styles.bold}>string | 'none'</strong>
            으로 배경 색을 정할 수 있습니다.
          </div>
        </div>
      </Modal>
      <Modal
        isOutClose={false}
        background="rgba(234,234,234,0.3)"
        modalElement={
          <div className={styles.transition}>
            <Tab label="Portal을 이용한 Modal Component 구현!" contents="왜 제가 Next로 시작했을까요? 습관을 잘못들인 것 같기도 하네요 ^.^" />
          </div>
        }
      >
        <div className={styles.modal}>
          <h1 className={styles.title}>실제 사용 사례입니다.</h1>
          <h2 className={styles.subTitle}>이런 식으로 띄울 수 있겠죠?</h2>
          <div className={styles.content}>
            width와 height를 사용하지 않으면 이렇게 좁게 보여지기도 한답니다. <br />
            <br />
            이제 제 고민은 반응형을 어떻게 구축할 것인가 라는 고민입니다.
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalTestPage;
