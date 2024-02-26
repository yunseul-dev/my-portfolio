import { Center, Container, Text, Flex, Title, Image } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const goUp = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, 100%, 0); }
to {
  opacity: 1;
  transform: translateZ(0);
}
`;

const AnimateContainer = styled.div`
  animation: ${goUp} 1s;
`;

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.2;

      if (scrollPosition > triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Center bg={'pink.4'} id="skills">
      <Container py={50} pb={isVisible ? '50px' : '600px'} mb={30}>
        {isVisible && (
          <AnimateContainer>
            <Text ta="right" fz={'44px'} fw={700} mb={30}>
              Skills
            </Text>
            <Flex gap={10}>
              <Container
                my={10}
                align={'center'}
                style={{ border: '4px solid white', borderRadius: '15%' }}
                w={300}
                py={10}
                bg={'dark.0'}>
                <Title fz={28} m={10} c={'dark.8'}>
                  Front-end
                </Title>
                <Flex direction={'column'} align={'center'} gap={20}>
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black'
                    }
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
                    }
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white'
                    }
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"
                  />
                </Flex>
              </Container>
              <Container
                my={10}
                align={'center'}
                style={{ border: '4px solid white', borderRadius: '15%' }}
                w={300}
                py={10}
                bg={'dark.0'}>
                <Title fz={28} m={10} c={'dark.8'}>
                  Styling
                </Title>
                <Flex direction={'column'} align={'center'} gap={20}>
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'
                    }
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white'
                    }
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'
                    }
                  />
                </Flex>
              </Container>
              <Container
                my={10}
                align={'center'}
                style={{ border: '4px solid white', borderRadius: '15%' }}
                w={300}
                py={10}
                bg={'dark.0'}>
                <Title fz={28} m={10} c={'dark.8'}>
                  Back-end
                </Title>
                <Title order={5} c={'dark'}>
                  (API 기반 간단 구현)
                </Title>
                <Flex direction={'column'} align={'center'} gap={20}>
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'
                    }
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'}
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'
                    }
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white'}
                  />
                </Flex>
              </Container>
              <Container
                my={10}
                align={'center'}
                style={{ border: '4px solid white', borderRadius: '15%' }}
                w={300}
                py={10}
                bg={'dark.0'}>
                <Title fz={28} m={10} c={'dark.8'}>
                  Collaboration & Tools
                </Title>
                <Flex direction={'column'} align={'center'} gap={20}>
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white'
                    }
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={'https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white'}
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={
                      'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white'
                    }
                  />
                  <Image
                    style={{ borderRadius: '20px' }}
                    src={'https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white'}
                  />
                </Flex>
              </Container>
            </Flex>
          </AnimateContainer>
        )}
      </Container>
    </Center>
  );
};

export default Skills;
