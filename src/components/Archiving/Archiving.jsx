import { Center, Container, Text, Flex, Title, Grid, Anchor } from '@mantine/core';

const Archiving = () => {
  return (
    <Center bg={'cyan.7'} id="archiving">
      <Container py={50}>
        <Text ta="right" fz={'44px'} fw={700} mb={30}>
          Archiving
        </Text>
        <Flex gap={30}>
          <Container
            c={'dark.8'}
            w={300}
            h={300}
            style={{ border: '1px solid white', borderRadius: '10%' }}
            bg={'white'}
            p={30}>
            <Title>깃허브</Title>
            <Anchor href="https://github.com/yunseul-dev" fw={600}>
              깃허브 바로가기
            </Anchor>
            <Text pb={10}>소스 코드 저장소입니다.</Text>
            <Text>
              과거 프로젝트의 소스 코드와 <br />
              혼자서 알고리즘 공부하며 끄적이던 <br /> 소스 코드가 있습니다.
            </Text>
          </Container>
          <Grid
            w={600}
            h={300}
            c={'dark.8'}
            style={{ border: '1px solid white', borderRadius: '5%' }}
            bg={'white'}
            p={30}>
            <Grid.Col span={6}>
              <Title>티스토리</Title>
              <Anchor href="https://blossom2305.tistory.com/" fw={600}>
                티스토리 바로가기
              </Anchor>
              <Text pb={10}>지식 공유 목적의 블로그입니다.</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Title>노션</Title>
              <Anchor href="https://tropical-ferry-82d.notion.site/FE-63512a4f02024a40854feb55890e9741?pvs=74" fw={600}>
                노션 바로가기
              </Anchor>
              <Text pb={10}>FE 개발자로의 성장 과정을 기록합니다.</Text>
              <Text>문제를 해결하는 과정을 회고합니다.</Text>
              <Text>웹 관련 지식들을 정리합니다.</Text>
              <Text>프로젝트의 진행과정을 기록합니다.</Text>
            </Grid.Col>
            <Grid.Col span={12} py={10}>
              <Text></Text>
              <Text></Text>
            </Grid.Col>
          </Grid>
        </Flex>
      </Container>
    </Center>
  );
};

export default Archiving;
