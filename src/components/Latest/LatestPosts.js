import React from 'react';
import PostContent from './PostContent';
import './LatestPosts.css';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  Wrap,
} from '@chakra-ui/layout';
import { MinusIcon } from '@chakra-ui/icons';

function LatestPosts() {
  return (
    <Container maxW='90%' pos='relative' pt='20'>
      <Text
        className='latestPostText'
        display='flex'
        alignItems='center'
        fontWeight='normal'
        fontFamily='fantasy'>
        Latest Posts{' '}
        <Box
          border='0.1em solid black'
          borderColor='gray.800'
          w='24'
          ml='2'></Box>
      </Text>
      <Box px='14' display='grid' gridTemplateColumns='1fr 1fr' gridGap='20'>
        <PostContent />
      </Box>
      <Text
        textAlign='center'
        w='20%'
        m='auto'
        borderBottom='5px solid black'
        my='10'
        display='flex'
        justifyContent='center'
        cursor='pointer'
        _hover={{ color: 'brand.main' }}
        fontFamily='sans-serif'
        color='gray.600'
        alignItems='center'
        gridGap='1'
        borderColor='brand.main'>
        See More Latest Articles{' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          class='bi bi-arrow-right'
          viewBox='0 0 16 16'>
          <path
            fill-rule='evenodd'
            d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
          />
        </svg>
      </Text>
    </Container>
  );
}

export default LatestPosts;
