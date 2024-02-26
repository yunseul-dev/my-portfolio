import { Center, Container, Flex, Text } from '@mantine/core';
import Universe from './Universe';
import SecondCloset from './SecondCloset';
import CulPop from './CulPop';
import MiniApp from './MiniApp';

const Projects = () => {
  return (
    <Center id="projects" bg={'dark.8'}>
      <Container py={50}>
        <Text
          ta="left"
          fz={'44px'}
          fw={700}
          mb={30}
          variant="gradient"
          gradient={{ from: 'cyan', to: 'violet', deg: 316 }}>
          Projects
        </Text>
        <Flex direction={'column'} gap={15}>
          <Universe />
          <SecondCloset />
          <CulPop />
          <MiniApp />
        </Flex>
      </Container>
    </Center>
  );
};

export default Projects;
