import styles from './header.module.scss';
import Logo from './logo';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div>
        <div>달</div>
        <div>돋보기</div>
        <div>로그인</div>
      </div>
    </div>
  );
};

export default Header;
