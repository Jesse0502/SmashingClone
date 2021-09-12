import React from 'react';
import { Box, Heading, Text, Wrap } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { Image } from '@chakra-ui/image';
import { Button, ButtonGroup, Flex, Container } from '@chakra-ui/react';
import CatImage from '../../images/cat-in-the-chair.png';
function EmailNewsletter() {
  return (
    <Container justifySelf='flex-end' maxW={{ lg: '90%', base: '100%' }}>
      <Box pos='relative'>
        <Image
          w={{ lg: '60', base: '44' }}
          zIndex='999'
          pos='absolute'
          ml={{ lg: '20', base: '16' }}
          mt={{ lg: '14', base: '1' }}
          src={CatImage}
        />
      </Box>
      <Container
        rounded='2xl'
        centerContent
        justifyContent='center'
        bg='#E7F8FF'
        mt={{ lg: '40', base: '20' }}
        py={{ lg: '5', base: '3' }}
        h='max'>
        <Button
          color='brand.main'
          mt={{ lg: '32', base: '24' }}
          p='28px'
          shadow='md'
          bg='white'
          fontSize='1.3em'
          rounded='md'
          fontWeight='bold'
          fontFamily='cursive'>
          Email Newsletter
        </Button>
        <Heading color='gray.800' textAlign='center' mt='5'>
          Useful front-end & UX tips, delivered once a week.
        </Heading>
        <Text
          mt='10'
          fontSize='1.2em'
          fontWeight='normal'
          textAlign='center'
          mx='10'>
          With tools to help you get your work done better. Subscribe and get
          Vitaly’s{' '}
          <span style={{ color: '#006FC6' }}>
            {' '}
            Smart Interface Design Checklists PDF{' '}
          </span>{' '}
          — in your inbox. 🎁
        </Text>
        <Flex
          mt='10'
          alignItems='center'
          shadow='xl'
          transition='ease-out'
          transitionDuration='0.3s'
          _hover={{
            shadow: 'none',
            transition: 'ease-out',
            transitionDuration: '0.3s',
            cursor: 'pointer',
          }}>
          <Input
            borderRightRadius='0'
            borderLeftRadius='0.7em'
            bg='white'
            fontSize='1.3em'
            placeholder='Your email'
            p='8'
            _placeholder={{ fontSize: '1.1em', color: 'grey' }}
          />
          <Button
            bg='#006FC6'
            color='white'
            _hover={{ bg: '#006FC6' }}
            p='8'
            fontSize='1.2em'
            borderRightRadius='0.7em'
            borderLeftRadius='0'>
            Meow!
          </Button>
        </Flex>
        <Text mt='7' color='gray.600' fontStyle='italic'>
          On{' '}
          <span style={{ textDecoration: 'underline' }}> front-end & UX.</span>{' '}
          Trusted by 190.000 folks.
        </Text>
      </Container>
    </Container>
  );
}

export default EmailNewsletter;
