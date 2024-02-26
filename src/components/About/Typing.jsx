import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Text } from '@mantine/core';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const typingCursor = keyframes`
 from {
    border-right-color: rgba(17, 17, 17, 0.9);
  }
  to {
    border-right-color: rgba(255, 255, 255, 0.8);
  }
`;

const FirstTypeOut = styled.div`
  display: inline-block;
  overflow: hidden;
  border-right: 2px solid none;
  white-space: nowrap;
  width: 0;
  animation:
    ${typing} 1.5s steps(20, end) forwards,
    ${typingCursor} 900ms steps(20) ${({ last }) => last && 'infinite;'};
  animation-delay: ${({ last }) => last && `calc(${last} * 1.5s);`};
`;

const Typing = ({ str, isLast, fontSize, setAnimationCompleted, isSpecial }) => (
  <FirstTypeOut last={isLast} fontSize={fontSize} onAnimationEnd={setAnimationCompleted}>
    <Text
      style={{ display: 'inline-block' }}
      fz={28}
      fw={600}
      variant={isSpecial ? 'gradient' : ''}
      gradient={{ from: 'cyan', to: 'violet', deg: 316 }}>
      {str}
    </Text>
  </FirstTypeOut>
);

export default Typing;
