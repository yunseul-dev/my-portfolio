import { Flex } from '@mantine/core';
import MenuList from './MenuList';

const Navbar = () => {
  return (
    <Flex
      h={60}
      px={50}
      align={'center'}
      justify={'flex-end'}
      pos={'sticky'}
      top={0}
      bg={'dark.8'}
      style={{ zIndex: 3 }}>
      <Flex gap={20} fz={20}>
        <MenuList name={'About me'} togo={'about'} />
        <MenuList name={'Skills'} togo={'skills'} />
        <MenuList name={'Projects'} togo={'projects'} />
        <MenuList name={'Archiving'} togo={'archiving'} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
