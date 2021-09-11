import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import './Navbar.css';
function NavSubItems() {
  return (
    <Box bg='white' boxShadow='md' py='3' overflow='auto'>
      <Flex
        alignItems='center'
        justify='space-around'
        className='hideScroll'
        gridGap={{ lg: '1', base: '5' }}>
        {[
          'Accessibility',
          'CSS',
          'JavaScript',
          'React',
          'Vue',
          'Round-Ups',
          'UX',
          'Design',
          'Web Design',
          'Figma',
          'Wallpapers',
          'Guides',
          'Business',
          'Career',
          'Privacy',
        ].map((name) => (
          <Text
            cursor='pointer'
            outline='1px solid transparent'
            _hover={{
              outlineColor: '#D33A2C',
              transition: 'ease-out',
              transitionDuration: '0.3s',
            }}
            fontWeight='bold'
            bg='#FFE3E3'
            px='4'
            py='2'
            borderRadius='10'
            color='#D33A2C'>
            {name}
          </Text>
        ))}
      </Flex>
    </Box>
  );
}

export default NavSubItems;
