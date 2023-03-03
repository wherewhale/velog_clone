import styles from './tab.module.scss';

interface Props {
  label?: string;
  contents?: string;
  date?: Date;
}

const Tab = ({ label, contents, date }: Props) => {
  return <div className={styles.container}>Test</div>;
};

export default Tab;
