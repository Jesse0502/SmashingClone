import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import './personOfTheWeek.css';
import PersonCards from './PersonCards';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import Img1 from '../../images/post-img-6.jpg';
function PersonOfTheWeek() {
  return (
    <Box w='90%' m='auto' pos='relative'>
      <Text
        pos='absolute'
        display='flex'
        fontFamily='sans-serif'
        color='gray.800'
        alignItems='center'
        className='PersonOfTheWeekText'>
        Community Links{' '}
        <Box
          border='0.1em solid black'
          borderColor='gray.800'
          w='24'
          ml='2'></Box>
      </Text>
      <Flex w='80%' m='auto' alignItems='center'>
        <Image
          className='imageRotate'
          w='40'
          mx='10'
          h='max'
          borderRadius='20'
          border='8px solid black'
          borderColor='brand.main'
          src={Img1}
        />
        <Box>
          <Text color='gray.600' fontFamily='serif' fontSize='1.2em'>
            Person Of The Week
          </Text>
          <Text fontSize='1.2em' py='10'>
            Ifeoma Imoh (@iphiee_omah) is a front-end developer who loves to
            make things with JavaScript. She started coding in 2019 and runs a
            YouTube channel where she shares JavaScript tutorials and
            interesting things she came across on her learning journey that
            might help other developers, too. Thank you for sharing and caring,
            dear Ifeoma!
          </Text>
        </Box>
      </Flex>
      <Box
        px='14'
        py='24'
        display='grid'
        gridTemplateColumns='1fr 1fr'
        gridGap='20'>
        <PersonCards />
      </Box>

      <Text
        borderBottom='5px solid'
        borderColor='brand.main'
        w='20%'
        m='auto'
        display='flex'
        justifyContent='center'
        gridGap='1'
        _hover={{ color: 'brand.main', cursor: 'pointer' }}
        alignItems='center'
        fontFamily='sans-serif'
        fontSize='1.1em'
        mb='28'
        color='gray.700'
        textAlign='center'>
        More links on Twitter <ArrowForwardIcon />
      </Text>
    </Box>
  );
}

export default PersonOfTheWeek;
