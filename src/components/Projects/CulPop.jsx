import { Container, Text, Flex, Title, Badge, Divider } from '@mantine/core';
import ImgCarousel from './ImgCarousel';
import { FaCheck } from 'react-icons/fa6';
import CustomAnchor from './CustomAnchor';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

const CulPop = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const skills = [
    'Javascript',
    'React',
    'Recoil',
    'Vite',
    'Mantine',
    'MySQL',
    'Java',
    'Spring',
    'redis',
    'JUnit5',
    'MyBatis',
  ];
  return (
    <Container
      style={{
        border: '2px solid var(--mantine-color-violet-8)',
        borderRadius: '20px',
      }}
      p={15}
      mb={20}>
      <Modal
        opened={opened}
        onClose={close}
        title="나의 프로젝트를 소개합니다"
        centered
        size={'50%'}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 4,
        }}>
        <Container p={25}>
          <Title order={4} c={'violet.8'} mb={10}>
            팝업 스토어에 대한 정보를 편리하게 찾을 수 있어요
          </Title>
          전시회나 공연과 달리 한 곳에 팝업스토어에 대한 정보는 주최 브랜드의 사이트나 인스타그램으로 공유돼요.
          <br />
          날짜별, 지역별로 필터하여 편리하게 현재 어떤 팝업이 진행 중인지 검색할 수 있어요.
          <br />
          <br />
          <Title order={5} c={'violet.8'} mb={10}>
            나와 관심사가 같은 친구들과 취미를 함께 즐겨요
          </Title>
          커뮤니티에 후기를 작성할 수 있어요.
          <br />
          채팅 기능으로 동행을 구할 수 있어요.
        </Container>
      </Modal>
      <Flex direction={'column'} align={'center'}>
        <Title order={1}>CulPop</Title>
        <Text c={'dark.2'}>2023.11 - ing (프론트엔드 1人, 백엔드 1人)</Text>
      </Flex>
      <Flex my={10}>
        <Container w={'40%'}>
          <ImgCarousel
            imgs={[
              './projectImg/culpop1.png',
              './projectImg/culpop2.png',
              './projectImg/culpop3.png',
              './projectImg/culpop4.png',
            ]}
            delay={2000}
          />
          <Flex justify={'flex-start'} align={'center'} mt={15} gap={10}>
            <CustomAnchor href={'https://culpop.vercel.app/'} name={'site'} />
            <CustomAnchor href={'https://www.notion.so/CulPop-c49f32ce4b224eceb23311692d552e17'} name={'notion'} />
            <CustomAnchor href={'https://github.com/IxxP-Girls'} name={'github'} />
            <Button onClick={open} color="violet.8">
              기능 소개
            </Button>
          </Flex>
        </Container>
        <Container w={'60%'}>
          <Text fz={20} c="violet.8" fw={600}>
            팝업 행사 안내 서비스
          </Text>
          <Text>
            이 서비스는 팝업스토어에 관련된 정보를 손쉽게 찾아볼 수 있도록 도와줘요!
            <br /> 사용자들 간에 소통과 교류를 촉진하여 <br /> 더욱 풍부한 취미생활을 지원하는 것이 목표입니다. <br />
            <br />
          </Text>
          <Text fw={600} c={'violet.8'}>
            구현 내용
          </Text>
          <Text>
            <FaCheck /> 메인 페이지, 마이 페이지, 게시글 상세 페이지, 검색 페이지 구현
          </Text>
          <Text>
            <FaCheck /> React Query, Recoil 활용한 API 요청 및 상태 관리
          </Text>
          <Text>
            <FaCheck /> 페이지 URL 구조 결정 및 React Router를 이용한 라우팅
          </Text>
          <Text>
            <FaCheck /> 검색 기능, 페이지네이션,무한 스크롤, 댓글 기능 구현
          </Text>
          <Divider my="md" />
          <Flex pb={10} gap={5} wrap={'wrap'}>
            {skills.map(skill => (
              <Badge variant="default" color="blue" size="lg" key={skill}>
                {skill}
              </Badge>
            ))}
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
};

export default CulPop;
