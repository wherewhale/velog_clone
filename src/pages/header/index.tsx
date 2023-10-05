import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import jeansSrc from '@/assets/images/headerTest/dev-jeans.png';
import { Header } from '@/components/header';

import styles from './headerPage.module.scss';

const HeaderPage = () => {
  const top = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState(Boolean);

  useEffect(() => {
    const option = {
      rootMargin: '10px', // rootMargin을 '10px 10px 10px 10px'로 설정
      threshold: 0.2, // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 20%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
    };
    const observer = new IntersectionObserver(function useCallback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTop(true);
        } else {
          setIsTop(false);
        }
      });
    }, option);
    observer.observe(top.current as Element);
  }, []);

  return (
    <>
      <Header user="wha1e.log" isTop={isTop} />
      <div className={styles.body}>
        <div ref={top} className={styles.title}>
          헤더를 어떻게 하면 가렸다가 보여줄 수 있을까?
        </div>
        <div className={styles.name}>wha1eson . 1일 전</div>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.buttonWrapper}>
            IntersectionObserver
          </button>
          <button type="button" className={styles.buttonWrapper}>
            SCSS
          </button>
          <button type="button" className={styles.buttonWrapper}>
            과제 #4
          </button>
        </div>
        <div className={styles.series}>
          일단 대강 만들어 봅시다.
          <br /> <br /> 과제 #4 스크롤에 따른 헤더의 스타일 변경! (+ 최적화는 덤!)
        </div>
        <div className={styles.postBody}>
          <div className={styles.mainImage}>
            <Image src={jeansSrc} width={400} height={400} alt="mainImage" />
          </div>
          <br />
          여기에 넣는 것은 어디까지나 테스트를 위해 간략히 만든 것입니다.
          <br />
          컴포넌트화를 안해서 뭐라고 하진 말아주세요 ㅠ
          <br />
          <br />
          놀라운 것중 하나는 벨로그를 보니, 헤더의 위치를 자연스럽게 옮기고 있습니다.
          <br />
          가장 첫번째로 해야하는 일은 무엇일까요?
          <br />
          한 번 살펴봅시다.
          <br />
          <br />
          <hr />
          <br />
          <h1 className={styles.subTitle}>IntersectionObserver</h1>
          <br />
          일단 top 위치가 사용자가 보는 곳에 들어온다면, 특정 이벤트가 발생해야 한다고 생각했습니다.
          <br />
          따라서, 바디 상단에 observer를 두고, 보인다면 헤더의 위치가 상단에 고정된다! 라는 매커니즘을 구상했습니다.
          <br />
          <br />
          이를 위해서 post하는 페이지의 top에 observer를 배치하고, 이를 header에 Props로 넘겨주었습니다.
          <br />
          해당 기능을 통해 참/거짓 여부를 확인한 header는 스타일 적용여부를 결정하고 상단 고정여부를 확인합니다.
          <br />
          <br />
          <hr />
          <h1 className={styles.subTitle}>Header offset Y</h1>
          <br />
          헤더의 스타일을 적용시켜줄 CSSProperties를 생성하고, 이 값을 저장하여 상태를 변환시켜줄 state를 생성합니다.
          <br />
          이후에 이러쿵 저러쿵 하면~~~ 완성!
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
