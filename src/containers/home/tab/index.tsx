import styles from './tab.module.scss';
interface Props {
  label?: string;
  contents?: string;
}

const Tab = ({ label, contents }: Props) => {
  return (
    <div className={styles.container}>
      <img src={'/static/images/sample.png'} className={styles.image} alt="img" />
      <div className={styles.label}>{label}</div>
      <div className={styles.contents}>{contents}</div>
    </div>
  );
};

export default Tab;
