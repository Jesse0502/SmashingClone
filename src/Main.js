import React, { useState, useContext } from 'react';
import { Box, Container, Flex, Text, Image, Link } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Cards from './components/Cards/Cards';
function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
    </>
  );
}

export default Main;
