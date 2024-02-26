import { Center, Container, Image, Text, Flex, Button, Modal } from '@mantine/core';
import { HiUser, HiPhone, HiMail, HiCake } from 'react-icons/hi';
import { useState } from 'react';
import Typing from './Typing';
import { useDisclosure } from '@mantine/hooks';

const About = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Center id="about">
      <Modal
        opened={opened}
        onClose={close}
        centered
        size={'50%'}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}>
        <Container>
          <Flex align={'center'} justify={'space-between'} m={10} py={10}>
            <Image src={'./image/IDpicture.jpg'} w={200} radius={'30%'} />
            <Container pt={20}>
              <Flex direction={'column'} justify={'space-between'} gap={20}>
                <Flex align={'center'}>
                  <HiUser size={32} />
                  <Text fz={24} pl={10} fw={600}>
                    차윤슬
                  </Text>
                </Flex>
                <Flex align={'center'}>
                  <HiCake size={32} />
                  <Text fz={24} pl={10} fw={600}>
                    1997.05.23
                  </Text>
                </Flex>
                <Flex align={'center'}>
                  <HiPhone size={28} />
                  <Text fz={24} pl={10} fw={600}>
                    010-2333-6352
                  </Text>
                </Flex>
                <Flex align={'center'}>
                  <HiMail size={28} />
                  <Text fz={24} pl={10} fw={600}>
                    yunseul.dev@gmail.com
                  </Text>
                </Flex>
              </Flex>
            </Container>
          </Flex>
        </Container>
      </Modal>
      <Center h={'100vh'}>
        <Container m={30}>
          <Typing str="수학과 미술을 좋아하는 Frontend 주니어 개발자 입니다." isLast={0} isSpecial={true} />
          <Typing str="나의 발자취를 기록하는 것을 좋아합니다." isLast={1} />
          <Typing str="일상에서 마주한 불편함으로 더 나은 사용자 경험에 대해 고민합니다." isLast={2} isSpecial={true} />
          <Typing
            str=" 더 나은 세상을 위해 IT 기술을 활용하고 싶습니다."
            isLast={3}
            setAnimationCompleted={() => {
              setAnimationCompleted(true);
            }}
          />
          {animationCompleted && (
            <Flex justify={'flex-end'} mt={20} mr={15}>
              <Button onClick={open}>Contact me</Button>
            </Flex>
          )}
        </Container>
      </Center>
    </Center>
  );
};

export default About;
