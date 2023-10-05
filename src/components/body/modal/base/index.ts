import dynamic from 'next/dynamic';

export const BaseModal = dynamic(() => import('./BaseModal'), { ssr: false });

//ㅋㅋ 삽질함 페이지가 켜지자 마자 모달이 켜져있지 않은 경우면, 문제 없음. (NextJS에서 되게 유용하게 사용될 것임.)
