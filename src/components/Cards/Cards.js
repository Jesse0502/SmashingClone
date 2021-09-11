import { Button } from '@chakra-ui/button';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

function Cards() {
  return (
    <>
      <Container
        // centerContent
        //   px='40'
        display='relative'
        maxW='80%'
        display='grid'
        gridAutoFlow='column'
        gridAutoFlow={{ lg: 'row', base: 'column' }}
        gridTemplateColumns='1fr 1fr 1fr'
        mb='10'
        gridGap='10'>
        {[
          {
            title: 'Accessible Front-End Components',
            subTitle:
              'Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs.',
            btnTxt: 'Explore Accessible Components',
            primary: '#18A46F',
            secondary: '#F1FDF8',
          },
          {
            title: 'CSS Generators & Tools',
            subTitle:
              'Useful CSS tools for animations, shadows, cubic-bezier curves, easing gradients, filters, overlays, type scales.',
            btnTxt: 'Explore CSS Generators',
            primary: '#F55700',
            secondary: '#FEF1F0',
          },
          {
            title: 'Front-End Boilerplates & Starter Kits',
            subTitle:
              'HTML boilerplates, CSS resets, forms, dev themes, gitignore, CSS snippets, static sites, style guides.',
            btnTxt: 'Explore Front-End Boilerplates',
            primary: '#AA1994',
            secondary: '#FBECF9',
          },
        ].map((card) => (
          <Flex
            bgColor={card.secondary}
            rounded='xl'
            p='10'
            w='400px'
            shadow='2xl'
            flexWrap='wrap'>
            <Heading color={card.primary} textDecoration='underline'>
              {card.title}
            </Heading>
            <Text py='8' fontSize='1.2em' color='gray.800' lineHeight='35px'>
              {card.subTitle}
            </Text>
            <Button
              bgColor={card.primary}
              fontSize='1.1em'
              _hover='disabled'
              rounded='xl'
              overflowWrap='break-word'
              textAlign='center'
              py='10'
              w='full'
              color='white'>
              {card.btnTxt}
            </Button>
          </Flex>
        ))}
      </Container>
      <Flex
        justify='center'
        w='12%'
        m='auto'
        mb='20'
        cursor='pointer'
        borderBottom='5px solid black'
        borderColor='brand.main'>
        <Text
          gridGap='2'
          alignItems='center'
          _hover={{ color: 'brand.main' }}
          color='gray.700'
          fontFamily='fantasy'
          display='flex'
          alignItems='center'>
          See All Guides{' '}
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
      </Flex>
    </>
  );
}

export default Cards;
