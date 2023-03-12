import styles from './header.module.scss';
import Logo from './logo';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <nav>
        <div>달</div>
        <div>돋보기</div>
        <div>로그인</div>
      </nav>
    </header>
  );
};

export default Header;
