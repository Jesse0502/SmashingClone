import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { extendTheme } from '@chakra-ui/react';
import Main from './Main';
function App() {
  const theme = extendTheme({
    colors: {
      brand: {
        main: '#D33A2C',
        dark: '#B43125',
        light: '#FFE3E3',
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  );
}

export default App;
