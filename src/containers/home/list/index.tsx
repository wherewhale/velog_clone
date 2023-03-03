import { DateConverter } from '@/utils/dateConverter';

import Tab from '../tab';
import styles from './list.module.scss';
import { testData } from './test';

const List = () => {
  return (
    <div className={styles.container}>
      {testData.map((label, index) => (
        <Tab key={index} label={testData[index].label} contents={testData[index].contents} date={DateConverter(testData[index].date)} />
      ))}
    </div>
  );
};

export default List;
