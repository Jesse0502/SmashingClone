import React, { useState, useContext } from 'react';
import { Box, Container, Flex, Text, Image, Link } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Cards from './components/Cards/Cards';
import LatestPosts from './components/Latest/LatestPosts';
import SlidingCards from './components/SlidingCards/SlidingCards';
import Boost from './components/BoostYourSkillsBanner/Boost';
import PersonOfTheWeek from './components/PersonOfTheWeek/PersonOfTheWeek';
import Footer from './components/Footer/Footer';

function Main() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Cards />
      <LatestPosts />
      <SlidingCards />
      <Boost />
      <PersonOfTheWeek />
      <Footer />
    </div>
  );
}

export default Main;
