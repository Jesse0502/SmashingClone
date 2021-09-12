import React from 'react';
import { Box, Flex, Heading, Text, Wrap } from '@chakra-ui/layout';
import CardComponent from './CardComponent';
import { Button } from '@chakra-ui/button';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { ArrowForwardIcon } from '@chakra-ui/icons';
function SlidingCards() {
  const handleScrollLeft = () => {
    document.querySelector('#cardsComponent').scrollLeft += 600;
  };
  const handleScrollRight = () => {
    document.querySelector('#cardsComponent').scrollLeft -= 600;
  };
  return (
    <Box mt='40' pos='relative'>
      <Heading textAlign='center' fontFamily='sans-serif' fontSize='2.2em'>
        That’s The Smashing Family.
      </Heading>
      <Heading
        textAlign='center'
        fontSize='1.6em'
        my='3'
        color='brand.main'
        fontFamily='sans-serif'>
        Smashing Magazine is so much more than articles.
      </Heading>
      <Button
        onClick={(e) => handleScrollRight(e)}
        pos='absolute'
        bottom='80'
        left='10'
        color='white'
        w='14'
        borderRadius='96'
        _hover={{ bg: 'brand.light', color: 'brand.main' }}
        bg='brand.main'
        zIndex='999'>
        <ArrowBackIcon />
      </Button>
      <CardComponent />
      <Button
        onClick={(e) => handleScrollLeft(e)}
        pos='absolute'
        bottom='80'
        _hover={{ bg: 'brand.light', color: 'brand.main' }}
        borderRadius='96'
        right='10'
        color='white'
        w='14'
        bg='brand.main'
        zIndex='999'>
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
}

export default SlidingCards;
