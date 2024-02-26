import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Image, getContextItemIndex } from '@mantine/core';

const ImgCarousel = ({ imgs, delay }) => {
  const autoplay = useRef(Autoplay({ delay: delay }));
  return (
    <Carousel
      withControls={false}
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}>
      {imgs.map((img, idx) => (
        <Carousel.Slide key={idx}>
          <Image src={img} key={getContextItemIndex} fit="contain" alt="project img" w={'auto'} h={200} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
