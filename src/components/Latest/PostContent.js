import React from 'react';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  Wrap,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import Img1 from '../../images/post-img-1.jpg';
import Img2 from '../../images/post-img-2.jpg';
import Img3 from '../../images/post-img-3.jpg';
import Img4 from '../../images/post-img-4.jpg';
import Img5 from '../../images/post-img-5.jpg';
import Img6 from '../../images/post-img-6.jpg';

function PostContent() {
  const cardContent = [
    {
      img: Img1,
      name: 'Iris Lješnjanin',
      title: 'New Smashing Online Workshops on Front-End & UX ',
      body: 'What’s the state of HTML Email, Vue.js and Next.js? What are new, smart interface design patterns we could use? Let’s figure it out. With our brand new online workshops on front-end & design. Now with free workshops for you to test the waters. ',
      date: 'September 8, 2021 in Smashing, Workshops',
    },
    {
      img: Img2,
      name: 'Patrick Brosset',
      title: 'What’s New With DevTools: Cross-Browser Edition ',
      body: 'Learn what’s new with developer tools in Firefox, Edge, Chrome and Safari. Discover new and powerful features that will help you be more comfortable and productive when testing and debugging across browsers. ',
      date: 'September 7, 2021 in Tools, Browsers, Debugging',
    },
    {
      img: Img3,
      name: 'Martina Marx',
      title: 'HTTP/3: Practical Deployment Options (Part 3)',
      body: 'After almost five years in development, the new HTTP/3 protocol is nearing its final form. Let’s take a close look at the challenges involved in deploying and testing HTTP/3, and how and if you should change your websites and resources as well. ',
      date: 'September 6, 2021 in Performance, Security, Browsers ',
    },
    {
      img: Img6,
      name: 'Alicia Powell',
      title: 'Reducing Carbon Emissions On The Web ',
      body: 'Websites, unfortunately, aren’t as environmentally friendly as we might like them to be. This article contains some thoughts and experiences from trying to clean them up. ',
      date: 'September 3, 2021 in Performance, Optimization, Opinion Column',
    },
  ];
  return (
    <>
      {cardContent.map((item) => (
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'left' }}
          textAlign={{ base: 'center', lg: 'left' }}>
          <Box>
            <Image
              w={{ lg: '80', base: '40' }}
              className='imageRotate'
              border='5px solid black'
              borderRadius='2xl'
              my={{ base: '5', lg: '0' }}
              borderColor='brand.main'
              src={item.img}
            />
          </Box>
          <Box pl={{ lg: '7', base: '0' }}>
            <Text
              display='inline-block'
              color='brand.main'
              fontSize='1.5em'
              textDecor='underline'
              fontWeight='bold'>
              {item.name}{' '}
            </Text>
            <Text
              color='gray'
              display='inline-block'
              fontFamily='fantasy'
              fontSize='1em'
              px='1'
              fontWeight='normal'>
              wrote
            </Text>

            <Text
              fontSize='1.7em'
              lineHeight='40px'
              my='5'
              color='gray.800'
              _hover={{ color: 'brand.main', cursor: 'pointer' }}
              fontWeight='bold'>
              {item.title}
            </Text>
            <Text
              fontSize='1.3em'
              lineHeight='35px'
              mt='5'
              color='gray.900'
              fontFamily='serif'>
              {item.body}
            </Text>
            <Box gridGap='3' display='flex' alignItems='center'>
              <Image
                w='5'
                h='5'
                src='https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-leaf-oktoberfest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png'
              />
              <Text my='5' color='gray.600'>
                {item.date}
              </Text>
            </Box>
          </Box>
        </Flex>
      ))}
    </>
  );
}

export default PostContent;
