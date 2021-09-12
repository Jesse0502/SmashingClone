import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Container, Heading, Text } from '@chakra-ui/layout';
import React, { useRef } from 'react';
import SlidingImg1 from '../../images/sliding-img-1.png';
import SlidingImg2 from '../../images/sliding-img-2.png';
import SlidingImg3 from '../../images/sliding-img-3.png';
import SlidingImg4 from '../../images/sliding-img-4.png';
import SlidingImg5 from '../../images/sliding-img-5.png';
import './SlidingComponent.css';
function CardComponent() {
  const btnRef = useRef();
  const cardsContent = [
    {
      img: SlidingImg1,
      heading: 'Smashing Books',
      body: 'b14 printed books and 67 eBooks. Written for web developers, designers and marketeers.ody',
      btn: 'Jump to books ↬',
      bottomTxt: 'Free airmail shipping wordlwide. No ifs or buts.',
      primary: '#18A46F',
      secondary: '#F1FDF8',
    },
    {
      img: SlidingImg2,
      heading: 'Smashing Workshops',
      body: 'Online workshops with experts. Broken into 2.5h-segments, with interactive, live sessions.',
      btn: 'Jump to workshops ↬',
      bottomTxt: '2.5h live sessions, with video recordings and Q&A.',
      primary: '#006FC6',
      secondary: '#E7F8FF',
    },
    {
      img: SlidingImg3,
      heading: 'Smashing Job Board',
      body: 'Helping designers and developers find great jobs, and connect with great companies.',
      btn: 'Jump to jobs ↬',
      bottomTxt: 'Freelancers and full-time, in front-end & UX.',
      primary: '#E62143',
      secondary: '#FFE5E2',
    },
    {
      img: SlidingImg4,
      heading: 'Smashing Membership',
      body: 'A friendly community for people who design and build the web. With discounts, goodies and fancy cats.',
      btn: 'Jump to Membership ↬',
      bottomTxt: 'For just 1 coffee a month.',
      primary: '#41B14F',
      secondary: '#E3F7E5',
    },
    {
      img: SlidingImg5,
      heading: 'Smashing Newsletter',
      body: 'Weekly tips on front-end & UX, delivered straight to your inbox. Just practical stuff that you can use.',
      btn: 'Jump to Newsletter ↬',
      bottomTxt: 'You can unsubscribe with 1 click any time.',
      primary: '#FF6411',
      secondary: '#FDFFE5',
    },
  ];

  return (
    <Container
      display='grid'
      gridGap='20'
      gridTemplateColumns='repeat(5, 1fr)'
      overflow='hidden'
      maxW='90%'
      pos='relative'
      id='cardsComponent'
      pt='48'
      mb='20'>
      {cardsContent.map((card) => (
        <Box
          pos='relative'
          bg={card.secondary}
          minH='200px'
          w='450px'
          p='10'
          pt='32'
          textAlign='center'>
          <Image pos='absolute' w='60' top='-32' left='23%' src={card.img} />
          <Heading size='xl'>{card.heading}</Heading>
          <Text color='gray.700' my='7' fontSize='xl'>
            {card.body}
          </Text>
          <Button
            _hover='disabled'
            color='white'
            w='full'
            fontSize='1.3em'
            bg={card.primary}>
            {card.btn}
          </Button>
          <Text color='gray.500' mt='7'>
            {card.bottomTxt}
          </Text>
        </Box>
      ))}
    </Container>
  );
}

export default CardComponent;
