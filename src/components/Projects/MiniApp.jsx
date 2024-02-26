import { Container, Text, Flex, Title, Badge, Divider } from '@mantine/core';
import ImgCarousel from './ImgCarousel';
import CustomAnchor from './CustomAnchor';

const MiniApp = () => {
  const skills = ['Javascript', 'React', 'Vite'];
  return (
    <Container
      style={{
        border: '2px solid cyan',
        borderRadius: '20px',
      }}
      p={15}
      mb={25}>
      <Flex direction={'column'} align={'center'} py={10}>
        <Title order={1}>Mini Web Application</Title>
        <Text c={'dark.2'} mb={10}>
          2023.03 - 2024.04 (프론트엔드 2人)
        </Text>
      </Flex>
      <Flex my={10}>
        <Container w={'60%'}>
          <Text fz={20} c="cyan" fw={600}>
            페어프로그래밍을 통한 20개의 애플리케이션 구현
          </Text>
          <Text> 아날로그 시계, 데이트 피커, 뉴스 뷰어 등 20개의 미니 애플리케이션 구현</Text>
          <Text> 웹 애플리케이션을 React 와 JavaScript 로 구현</Text>
          <Divider my="md" />
          <Flex pb={10} gap={5} wrap={'wrap'}>
            {skills.map(skill => (
              <Badge variant="default" color="blue" size="lg" key={skill}>
                {skill}
              </Badge>
            ))}
          </Flex>
        </Container>
        <Container w={'40%'}>
          <ImgCarousel
            imgs={['./projectImg/tabs.gif', './projectImg/gototop.gif', './projectImg/is-palindrome.gif']}
            delay={3000}
          />
          <Flex justify={'flex-end'} align={'center'} mt={15} gap={10}>
            <CustomAnchor
              href={'https://www.notion.so/Pair-programming-4c467ca1955e499d9a3455ad148dbe56'}
              name={'notion'}
            />
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
};

export default MiniApp;
