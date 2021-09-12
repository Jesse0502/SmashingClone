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
      textAlign={{ lg: 'center' }}
      px={{ lg: '32', base: '5' }}
      pos='relative'>
      <Heading py='10'>Browse All Smashing Magazine Topics</Heading>
      <UnorderedList
        display={{ lg: 'flex', base: 'grid' }}
        gridTemplateColumns='1fr 1fr'
        listStyleType='none'
        gridGap='10'
        flexWrap='wrap'
        justifyContent='center'
        mt='10'
        lineHeight={{ lg: '10px' }}>
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
            fontSize={{ lg: '1.4em', base: '1em' }}
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
        w={{ lg: '40%' }}
        fontSize='medium'
        fontStyle='italic'
        pt={{ lg: '20', base: '16' }}>
        With a commitment to quality content for the design community. Founded
        by Vitaly Friedman and Sven Lennartz. 2006–2021. Smashing is proudly
        running on <span style={{ textDecoration: 'underline' }}> Netlify</span>
        . <br /> Fonts by{' '}
        <span style={{ textDecoration: 'underline' }}> Latinotype </span>.
      </Text>
      <Flex
        gridGap={{ lg: '5', base: '2' }}
        pt='7'
        justifyContent='center'
        cursor='pointer'
        fontSize={{ base: '14', lg: 'lg' }}
        textAlign={{ base: 'center', lg: 'left' }}
        textDecor={{ lg: 'underline', base: 'none' }}>
        <Text>✎ Write for us </Text> <Text> Contact us </Text>{' '}
        <Text> About us (Impressum)</Text>{' '}
      </Flex>
      <Flex
        gridGap={{ lg: '5', base: '0' }}
        py='5'
        justify='center'
        cursor='pointer'
        textAlign={{ base: 'center', lg: 'left' }}
        fontSize={{ base: '15px', lg: 'lg' }}
        textDecor={{ lg: 'underline', base: 'none' }}>
        <Text> Privacy policy </Text> <Text> Membership login </Text>{' '}
        <Text> Delivery times</Text> <Text>Advertise</Text>{' '}
      </Flex>
      <Image
        bottom='10'
        w={{ lg: '20' }}
        py={{ base: '5' }}
        pos={{ lg: 'absolute' }}
        src='https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-bird-spring-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png'
      />
    </Box>
  );
}

export default Footer;
