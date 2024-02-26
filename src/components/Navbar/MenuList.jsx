import { Container } from '@mantine/core';
import { Link } from 'react-scroll';
import { useHover } from '@mantine/hooks';

const MenuList = ({ name, togo }) => {
  const { hovered, ref } = useHover();

  return (
    <Container ref={ref}>
      <Link
        to={togo}
        smooth={true}
        offset={-60}
        style={{
          cursor: 'pointer',
          color: hovered ? 'var(--mantine-color-violet-8)' : '',
          borderBottom: hovered ? '3px solid' : '',
          fontWeight: hovered ? '600' : '',
        }}>
        {name}
      </Link>
    </Container>
  );
};

export default MenuList;
