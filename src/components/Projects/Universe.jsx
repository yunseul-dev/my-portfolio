import { Container, Text, Flex, Title, Badge, Divider, Anchor } from '@mantine/core';
import ImgCarousel from './ImgCarousel';
import { FaCheck } from 'react-icons/fa6';
import CustomAnchor from './CustomAnchor';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const ani = keyframes`
from{
transform: rotate(20deg);
transform-origin: left top;
}
to{
transform: rotate(0);
}
`;

const AnimateContainer = styled.div`
  animation: ${ani} 2s;
`;

const Universe = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const skills = ['Javascript', 'React', 'Recoil', 'Vite', 'Mantine', 'NodeJS', 'Express'];

  return (
    <Container
      style={{
        border: '2px solid var(--mantine-color-violet-8)',
        borderRadius: '20px',
      }}
      p={15}
      mb={25}>
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
            국내 서비스중인 OTT 서비스들의 컨텐츠들을 한 곳에서 모아볼 수 있어요
          </Title>
          Netfix, Disney+, Wavve, Watcha, AppleTV+, AmazonPrime 의 TV, 영화 컨텐츠 들을 한곳에서 모아 볼 수 있어요
          <br />
          검색기능으로 원하는 컨텐츠의 상세정보를 찾아볼 수 있어요 필터로 원하는 OTT 서비스들의 컨텐츠만 찾아볼 수
          있어요 <br />
          <br />
          <Title order={5} c={'violet.8'} mb={10}>
            나의 Universe로 지금 보고있는 컨텐츠, 보고 싶은 컨텐츠, 히스토리를 관리해요
          </Title>
          나의 등록 정보를 기반으로 현명한 구독 관리를 할 수 있어요 가장 현명한 가격으로 구독하는 방법을 추천해줘요
          <br /> 현재 보고 있지 않은 구독 서비스를 알려줘요 나의 데이터를 기반으로 분석 그래프로 나의 OTT 생활을 한눈에
          보여줘요
        </Container>
      </Modal>
      <Flex direction={'column'} align={'center'}>
        <Title order={1}>Universe</Title>
        <Text c={'dark.2'}>2023.04 - 2023.05 (프론트엔드 3人 팀 프로젝트)</Text>
      </Flex>
      <Flex my={10}>
        <Container w={'40%'}>
          <ImgCarousel
            imgs={[
              './projectImg/universe1.png',
              './projectImg/universe2.png',
              './projectImg/universe3.png',
              './projectImg/universe4.png',
            ]}
            delay={2000}
          />
          <Flex justify={'flex-start'} align={'center'} mt={15} gap={10}>
            <CustomAnchor href={'https://web-universe-1ffi5z2alr8v333q.sel5.cloudtype.app/'} name={'site'} />
            <CustomAnchor href={'https://www.youtube.com/watch?v=mwvm2W9byCg&feature=youtu.be'} name={'youtube'} />
            <CustomAnchor href={'https://www.notion.so/Universe-ede5a22245774d45820bf178a6b38661'} name={'notion'} />
            <CustomAnchor href={'https://github.com/p-c-w'} name={'github'} />
            <Button onClick={open} color="violet.8">
              기능 소개
            </Button>
          </Flex>
        </Container>
        <Container w={'60%'}>
          <Text fz={20} c={'violet.8'} fw={600}>
            국내외 OTT 컨텐츠 정보 통합 검색 및 현명한 구독료 추천 서비스
          </Text>
          매년 증가하는 OTT 서비스와 광범위하게 흩어져있는 컨텐츠들로 인해
          <br /> 사용하지 않으면서 구독하는 서비스가 늘어나 불필요한 지출이 발생해요.
          <br /> 보고싶은 컨텐츠들을 최소한의 비용으로 볼 수 있도록
          <br /> 현명한 소비를 도와주는 서비스가 있으면 좋을 것 같아 시작한 프로젝트입니다.
          <br />
          <br />
          <Text fw={600} c={'violet.8'}>
            구현 내용
          </Text>
          <Text>
            <FaCheck /> 로그인/회원가입 form, 모달 컴포넌트, 상세 페이지, 통계 컴포넌트 구현
          </Text>
          <Text>
            <FaCheck /> JWT를 활용한 회원가입, 로그인, 로그아웃 기능 구현
          </Text>
          <Text>
            <FaCheck /> 현명한 구독료 로직 구현
          </Text>
          <Text>
            <FaCheck />
            Node.js와 Express.js를 이용한 Server 구현
          </Text>
          <Text>
            <FaCheck />
            CloudType을 이용한 프론트엔드 및 백엔드 배포
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

export default Universe;
