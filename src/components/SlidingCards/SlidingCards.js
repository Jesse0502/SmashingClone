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
      <Heading
        textAlign='center'
        fontFamily='sans-serif'
        fontSize={{ lg: '2.2em', base: '2em' }}
        w='90%'
        m='auto'>
        That’s The Smashing Family.
      </Heading>
      <Heading
        textAlign='center'
        fontSize={{ lg: '1.6em', base: '1.4em' }}
        my='3'
        color='brand.main'
        fontFamily='sans-serif'>
        Smashing Magazine is so much more than articles.
      </Heading>
      <Button
        onClick={(e) => handleScrollRight(e)}
        pos='absolute'
        bottom={{ lg: '80', base: '72' }}
        left={{ lg: '10', base: '2' }}
        color='white'
        w={{ lg: '14', base: '1' }}
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
        bottom={{ lg: '80', base: '72' }}
        _hover={{ bg: 'brand.light', color: 'brand.main' }}
        borderRadius='96'
        right={{ lg: '10', base: '2' }}
        color='white'
        w={{ lg: '14', base: '1' }}
        bg='brand.main'
        zIndex='999'>
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
}

export default SlidingCards;
