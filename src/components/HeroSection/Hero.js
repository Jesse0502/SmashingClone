import React from 'react';
import HeroContent from './HeroContent';
import EmailNewsLetter from './EmailNewsletter';
import { Box } from '@chakra-ui/layout';
function Hero() {
  return (
    <Box
      display='grid'
      gridAutoFlow={{ lg: 'column', base: 'row' }}
      gridTemplateColumns={{ lg: '2fr 1fr', base: '' }}>
      <HeroContent />
      <EmailNewsLetter />
    </Box>
  );
}

export default Hero;
