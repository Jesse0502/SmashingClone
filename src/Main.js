import React, { useState, useContext } from 'react';
import { Box, Container, Flex, Text, Image, Link } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Cards from './components/Cards/Cards';
import LatestPosts from './components/Latest/LatestPosts';
function Main() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <LatestPosts />
    </>
  );
}

export default Main;
