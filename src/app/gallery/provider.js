'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Stack, Box, Text } from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Search from '../components/searchbar';
import MovieGrid from '../components/MovieGrid';

export function Providers({ children }) {
  const [searchResults, setSearchResults] = useState([]);

  // Callback function to receive search results
  const handleSearch = (results) => {
    setSearchResults(results);
  };
  return (
    <CacheProvider>
      <ChakraProvider>
        <Stack bg={'#020e15'}>
          <Navbar />
          <Stack direction={'column'} p={'20px'}>
            <Box>
              <Stack direction={'row'}>
              <Text fontWeight={'bold'} color={'white'} fontSize={['20px', '20px', '30px', '30px']}> Hi MENTOR </Text>
              <Avatar size={['sm', 'md', 'md', 'md']}>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
              </Avatar>
              </Stack>
            </Box>
            <Box>
              <Text fontWeight={'bold'} color={'white'} fontSize={['15px', '15px', '25px', '25px']}> Welcome to Movie Image Gallery! </Text>
            </Box>
            <Box>
              <Text fontWeight={'bold'} color={'white'} fontSize={['10px', '10px', '20px', '20px']}> Home of all the best movie posters </Text>
            </Box>
          </Stack>
          <Search onSearch={handleSearch} />
          {/**<Stack direction={'row'} p={'20px'}>
          <Box w={'25%'}><No1 /></Box>
          <Box w={'25%'}><No2 /></Box>
          <Box w={'25%'}><No3 /></Box>
          <Box w={'25%'}><No4 /></Box>
          </Stack>*/}
          <MovieGrid initialMovies={searchResults} />
        </Stack>
      </ChakraProvider>
    </CacheProvider>
  );
}
