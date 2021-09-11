import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Text, Wrap } from '@chakra-ui/layout';
import React from 'react';
import HeroImg1 from '../../images/hero-img-2.jpg';
import HeroImg2 from '../../images/hero-img-1.jpg';
import HeroImg3 from '../../images/hero-img-3.jpg';

import './Hero.css';
function HeroContent() {
  return (
    <div>
      <Box ml={{ lg: '28', base: '5' }} mr={{ lg: '80px', base: '5' }} mt='16'>
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          gridGap='10'
          alignItems='center'>
          <Box>
            <Box w='200px'>
              <Image
                className='imageRotate'
                border='5px solid #D33A2C'
                borderRadius='3xl'
                objectFit='fill'
                ml={{ base: '5', lg: 'none' }}
                src={HeroImg1}
              />
            </Box>
          </Box>
          <Box>
            <Text
              color='brand.main'
              display='inline-block'
              textDecor='underline'
              fontSize={{ lg: '1.3em', base: '1em' }}
              fontWeight='semibold'>
              Frederick O’Brien
            </Text>
            <Text
              display='inline'
              color='grey'
              fontStyle='oblique'
              fontFamily=''>
              {' '}
              wrote
            </Text>
            <Text
              fontWeight='700'
              fontSize={{ lg: '3em', base: '2em' }}
              lineHeight='shorter'
              my='2'
              color='gray.700'>
              Web Design Done Well: Excellent Editorial{' '}
            </Text>
            <Text
              display='inline-block'
              fontFamily='cursive'
              color='gray.600'
              mt='2'>
              Sep 10, 2021{' '}
            </Text>
            <Text display='inline' fontFamily='cursive' color='gray.500'>
              {' '}
              in{' '}
            </Text>
            {['Design', 'Inspiration', 'User Experience'].map((text) => (
              <Text
                cursor='pointer'
                display='inline'
                textColor='gray.600'
                fontWeight='bold'
                fontSize={{ lg: '1.3em', base: '1em' }}>
                <Text textDecor='underline' display='inline'>
                  {text}
                </Text>
                {', '}
              </Text>
            ))}
          </Box>
        </Flex>
        <Text
          mt='10'
          fontFamily='sans-serif'
          fontSize={{ lg: '1.3em', base: '1em' }}
          color='gray.700'
          fontWeight='hairline'>
          They say content is king, and they’re right. The web has unlocked
          untold possibilities for storytellers — provided the story is right,
          of course. Here are some of our favorite examples of editorial content
          thriving in the digital realm.{' '}
        </Text>
        <Text
          color='brand.main'
          fontWeight='bold'
          textDecor='underline'
          fontSize='1.2em'
          mt='5'>
          Continue reading ↬
        </Text>
        <Box my='5'>
          {[
            {
              name: 'Sam Poder',
              date: 'Sep 9, 2021 in',
              title: ' Next.js, React, JavaScript ',
              heading:
                'Using SWR React Hooks With Next.js’ Incremental Static Regeneration (ISR)',
              img: HeroImg2,
            },
            {
              name: 'Michelle Barker',
              date: 'Sep 8, 2021 in ',
              title: 'CSS, Design, Content',
              heading: 'Developer Decisions For Building Flexible Components',
              img: HeroImg3,
            },
          ].map((item) => (
            <Flex alignItems='center' my='20'>
              <Image
                src={item.img}
                w='32'
                className='imageRotate'
                border='5px solid black'
                borderRadius='xl'
                borderColor='brand.main'
              />
              <Box ml='7'>
                <Text
                  color='brand.main'
                  display='inline-block'
                  textDecor='underline'
                  fontSize='1.1em'
                  fontWeight='semibold'>
                  {item.name}
                </Text>
                <Text
                  display='inline-block'
                  fontFamily='cursive'
                  color='gray.600'>
                  {' / '}
                  {item.date}{' '}
                </Text>
                <Text
                  className='underlineText'
                  ml='2'
                  my='2'
                  color='gray.600'
                  fontSize='1.3em'>
                  {' ' + item.title + ', '}
                </Text>
                <Heading
                  py='1'
                  fontSize='2.2em'
                  fontFamily='sans-serif'
                  color='gray.700'>
                  {item.heading}
                </Heading>
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default HeroContent;
