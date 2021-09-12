import { Image } from '@chakra-ui/image';
import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from '@chakra-ui/layout';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <Box
      minH='100vh'
      bg='brand.main'
      color='white'
      textAlign='center'
      px='32'
      pos='relative'>
      <Heading py='10'>Browse All Smashing Magazine Topics</Heading>
      <UnorderedList
        display='flex'
        listStyleType='none'
        gridGap='10'
        flexWrap='wrap'
        justifyContent='center'
        mt='10'
        lineHeight='10px'>
        {[
          'Accessibility',
          'Android',
          'Animation',
          'Apps',
          'CSS',
          'Design',
          'Design Patterns',
          'Design Systems',
          'E-Commerce',
          'Freebies',
          'Graphics',
          'HTML',
          'Illustrator',
          'Inspiration',
          'iOS',
          'JavaScript',
          'Mobile Pattern',
          'Libraries',
          'Performance',
          'Photoshop Plugins',
          'React',
          'Responsive Design Service',
          'Workers',
          'Sketch',
          'Typography',
          'UI',
          'Usability',
          'User',
          'Experience',
          'Wallpapers',
          'Web',
          'Design',
          'WordPress',
          'Workflow',
        ].map((item) => (
          <ListItem
            fontSize='1.4em'
            color='white'
            className='listDot'
            cursor='pointer'
            _hover={{ color: 'gray.800' }}>
            {item}
          </ListItem>
        ))}
      </UnorderedList>
      <Text
        m='auto'
        textAlign='center'
        w='40%'
        fontSize='medium'
        fontStyle='italic'
        pt='20'>
        With a commitment to quality content for the design community. Founded
        by Vitaly Friedman and Sven Lennartz. 2006–2021. Smashing is proudly
        running on <span style={{ textDecoration: 'underline' }}> Netlify</span>
        . <br /> Fonts by{' '}
        <span style={{ textDecoration: 'underline' }}> Latinotype </span>.
      </Text>
      <Flex gridGap='5' pt='7' justifyContent='center' textDecor='underline'>
        <Text>✎ Write for us </Text> <Text> Contact us </Text>{' '}
        <Text> About us (Impressum)</Text>{' '}
      </Flex>
      <Flex gridGap='5' py='5' justify='center' textDecor='underline'>
        <Text> Privacy policy </Text> <Text> Membership login </Text>{' '}
        <Text> Delivery times</Text> <Text>Advertise</Text>{' '}
      </Flex>
      <Image
        bottom='10'
        w='20'
        pos='absolute'
        src='https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-bird-spring-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png'
      />
    </Box>
  );
}

export default Footer;
