import Dropdown from '@/components/body/dropdown';

const DropdownTest = () => {
  return (
    <>
      <Dropdown title="드롭다운 테스트" items={['첫 번째', '이렇게 하면', 3]} />
    </>
  );
};

export default DropdownTest;
