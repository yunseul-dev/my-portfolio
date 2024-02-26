import { Anchor } from '@mantine/core';
import { FaGithub, FaYoutube, FaGlobe } from 'react-icons/fa';
import { SiNotion, SiTistory } from 'react-icons/si';

const CustomAnchor = ({ href, name, size }) => {
  return (
    <Anchor href={href} target="_blank" c={'white'} size={size === 'mini' ? '27px' : '30px'}>
      {name === 'site' && <FaGlobe />}
      {name === 'github' && <FaGithub />}
      {name === 'youtube' && <FaYoutube />}
      {name === 'notion' && <SiNotion />}
      {name === 'tistory' && <SiTistory />}
    </Anchor>
  );
};

export default CustomAnchor;
