import { Button } from '@chakra-ui/button';
import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import ImgBoost from '../../images/online-workshops-summer.png';
function Boost() {
  return (
    <Box
      bg='#1B71BB'
      mb='20'
      minH='100vh'
      display='flex'
      flexDir='column'
      px={{ lg: '44', base: '5' }}
      textColor='white'>
      <Text
        textAlign='center'
        textShadow='2xl'
        fontSize={{ lg: '24', base: '22' }}
        fontFamily='serif'
        mt='20'>
        September–December 2021 • New Workshops
      </Text>
      <Heading
        textAlign='center'
        fontSize={{ lg: '6xl', base: '2xl' }}
        textDecor='underline'
        mb='5'
        mt={{ lg: '20', base: '10' }}>
        Boost Your Skills Online, On Front-End & Design
      </Heading>
      <Text
        textAlign='center'
        m='auto'
        w={{ lg: '80%' }}
        fontSize='1.3em'
        my='5'>
        Meet <span style={{ fontWeight: 'bold' }}> Smashing Workshops</span>,
        with practical, actionable insights from experts — live. With
        interactive exercises, slides, video recordings and a friendly Q&A.{' '}
      </Text>
      <Button
        textAlign='center'
        color='#1B71BB'
        fontSize={{ lg: '1.6em', base: '1em' }}
        m='auto'
        fontFamily='serif'
        display='flex'
        gridGap='1'
        alignItems='center'
        p={{ lg: '9', base: '5' }}
        my='10'
        rounded='lg'
        w='min'>
        Explore all speakers and topics <ArrowForwardIcon />
      </Button>
      <Image src={ImgBoost} w={{ lg: '70%' }} m='auto' mt={{ lg: '10' }} />
    </Box>
  );
}

export default Boost;
