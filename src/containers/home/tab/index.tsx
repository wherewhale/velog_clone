import styles from './tab.module.scss';

interface Props {
  label?: string;
  contents?: string;
  date: string[];
}

const Tab = ({ label, contents, date }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>
      <div className={styles.contents}>{contents}</div>
      <div className={styles.date}>
        {date[0]}년 {date[1]}월 {date[2]}일
      </div>
    </div>
  );
};

export default Tab;
