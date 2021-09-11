import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import NavSubItems from './NavSubItems';
import logo from '../../images/logo.png';
import { Image } from '@chakra-ui/image';
import './Navbar.css';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { Collapse } from '@chakra-ui/transition';
import { useDisclosure } from '@chakra-ui/hooks';
function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex flexDir='column' fontFamily='Cabin, sans-serif'>
      <Flex
        bg='#D33A2C'
        h='115px'
        justify='space-between'
        alignItems='center'
        px={{ lg: '10', base: '2' }}>
        <Image
          src={logo}
          alt='logo'
          objectFit='contain'
          h={{ base: '50px', lg: '50px' }}
          w={{ base: 'auto', lg: 'max' }}
          className='shadowLogo'></Image>
        <Flex mx='5'>
          {['Articles', 'Guides', 'Books', 'Workshops', 'Membership'].map(
            (name) => (
              <Text
                textShadow='xl'
                display={{ base: 'none', md: 'inherit' }}
                px='4'
                py='3'
                justifyContent='center'
                cursor='pointer'
                borderRadius='20'
                _hover={{ bg: '#B43125' }}
                fontSize='1.5em'
                fontWeight='semibold'
                color='white'>
                {name}
              </Text>
            )
          )}
          <Flex
            color='white'
            fontSize='1.5em'
            mx='1'
            w='max'
            borderRadius='20'
            px={{ lg: '3', base: '2' }}
            py='3'
            pos='relative'
            bg='#94291F'
            cursor='pointer'
            _hover={{ bg: '#731e16' }}
            onClick={onToggle}
            justify='center'
            alignItems='center'>
            Menu
            <Collapse in={isOpen} animateOpacity>
              <Box
                pos='absolute'
                p='40px'
                color='white'
                mt='4'
                right='0'
                bg='white'
                color='black'
                rounded='md'
                shadow='md'>
                Hello
              </Box>
            </Collapse>
            <Image
              h='30px'
              px='1'
              src='https://img.icons8.com/ios-glyphs/64/000000/cat.png'
            />
          </Flex>
        </Flex>
        <Flex
          w='full'
          mx='2'
          mt='-2'
          pos='relative'
          alignItems='center'
          display={{ base: 'none', lg: 'inherit' }}>
          <Box zIndex='999' position='absolute' ml='2' px='2' pt='2' bg='white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              fill='#F57A4C'
              class='bi bi-search'
              viewBox='0 0 16 16'>
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </Box>
          <Input
            bg='white'
            mt='2'
            py='7'
            rounded='xl'
            boxShadow='xl'
            _placeholder={{ fontSize: '1.7em', color: 'black', ml: '70px' }}
            _focus={{ border: '1px dashed black' }}
            placeholder='       Seach Articles...'
          />
        </Flex>
      </Flex>
      <Box>
        <NavSubItems />
      </Box>
    </Flex>
  );
}

export default Navbar;
