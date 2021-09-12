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
      px='44'
      textColor='white'>
      <Text
        textAlign='center'
        textShadow='2xl'
        fontSize='24'
        fontFamily='serif'
        mt='20'>
        September–December 2021 • New Workshops
      </Text>
      <Heading
        textAlign='center'
        fontSize='6xl'
        textDecor='underline'
        mb='5'
        mt='20'>
        Boost Your Skills Online, On Front-End & Design
      </Heading>
      <Text textAlign='center' m='auto' w='80%' fontSize='1.3em' my='5'>
        Meet <span style={{ fontWeight: 'bold' }}> Smashing Workshops</span>,
        with practical, actionable insights from experts — live. With
        interactive exercises, slides, video recordings and a friendly Q&A.{' '}
      </Text>
      <Button
        textAlign='center'
        color='#1B71BB'
        fontSize='1.6em'
        m='auto'
        fontFamily='serif'
        display='flex'
        gridGap='1'
        alignItems='center'
        p='9'
        my='10'
        rounded='lg'
        w='min'>
        Explore all speakers and topics <ArrowForwardIcon />
      </Button>
      <Image src={ImgBoost} w='80%' m='auto' mt='10' />
    </Box>
  );
}

export default Boost;
