import { Container, Text, Flex, Title, Badge, Divider } from '@mantine/core';
import ImgCarousel from './ImgCarousel';
import CustomAnchor from './CustomAnchor';
import { useDisclosure } from '@mantine/hooks';
import { FaCheck } from 'react-icons/fa6';
import { Modal, Button } from '@mantine/core';

const SecondCloset = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const skills = ['Typescript', 'React', 'Recoil', 'Vite', 'Styled-Component', 'NodeJS', 'Express', 'MongoDB'];
  return (
    <Container
      style={{
        border: '2px solid cyan',
        borderRadius: '20px',
      }}
      p={15}
      mb={25}>
      <Modal
        opened={opened}
        onClose={close}
        title="나의 프로젝트를 소개합니다"
        centered
        size={'40%'}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 4,
        }}>
        <Container p={25}>
          <Title order={4} c={'cyan'} pb={10}>
            불필요한 연락을 줄이고 최소한의 연락으로 안전하게 거래할 수 있어요
          </Title>
          최대한 많은 정보들은 필수 정보로 입력해요
          <br />
          '네고문의'를 받고싶지 않은 사용자는 문의하기 버튼을 비활성화해요
          <br />
          판매자와 연락할 수 없는 상품은 100프로 안전결제로 구매자를 보호해요
          <br />
        </Container>
      </Modal>
      <Flex direction={'column'} align={'center'}>
        <Title order={1}>SecondCloset</Title>
        <Text c={'dark.2'}>2023.10 - 2024.01 (개인 프로젝트)</Text>
      </Flex>
      <Flex my={10}>
        <Container w={'60%'}>
          <Text fz={20} c="cyan" fw={600}>
            불필요한 연락을 최소화한 의류 중고 거래 서비스
          </Text>
          <Text>
            빠르게 지나가는 유행을 따라 다양한 옷들이 소비되고 있지만, <br />
            옷장 속에서 자고있는 잊혀진 옷들도 많아요.
            <br />
            번개장터를 이용하며 불편했던 부분들을 개선하여 <br /> 소비자들이 더 편하고 가볍게 중고거래를 할 수 있도록
            시작한 프로젝트입니다.
          </Text>
          <br />
          <Text fw={600} c={'cyan'}>
            구현 내용
          </Text>
          <Text>
            <FaCheck /> 웹 페이지 성능 최적화
          </Text>
          <Text>
            <FaCheck /> React Query, Recoil 활용한 API 요청 및 상태 관리
          </Text>
          <Text>
            <FaCheck /> React-Query의 낙관적 업데이트로 사용자 경험 향상 및 응답성 개선
          </Text>
          <Text>
            <FaCheck /> Mongoose를 활용한 MongoDB CRUD API 구현
          </Text>
          <Text>
            <FaCheck /> socket을 이용한 실시간 채팅 구현
          </Text>
          <Text>
            <FaCheck /> 반응형 웹 디자인 구현
          </Text>
          <Text>
            <FaCheck /> AWS을 이용한 프론트엔드 및 백엔드 배포
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
        <Container w={'40%'}>
          <ImgCarousel
            imgs={[
              './projectImg/secondcloset1.png',
              './projectImg/secondcloset2.png',
              './projectImg/secondcloset3.png',
              './projectImg/secondcloset4.png',
            ]}
            delay={2000}
          />
          <Flex justify={'flex-end'} align={'center'} mt={15} gap={10}>
            <Button onClick={open}>기능 소개</Button>
            <CustomAnchor href={'http://secondcloset.store/'} name={'site'} />
            <CustomAnchor href={'https://www.youtube.com/watch?v=PgTxlaD2p4g&feature=youtu.be'} name={'youtube'} />
            <CustomAnchor href={'https://blossom2305.tistory.com/41'} name={'tistory'} size={'mini'} />
            <CustomAnchor href={'https://github.com/yunseul-dev/second-closet-frontend'} name={'github'} />
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
};

export default SecondCloset;
