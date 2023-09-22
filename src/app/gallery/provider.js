'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Stack, Box, Text } from '@chakra-ui/react';
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
        <Stack bg={'black'}>
          <Navbar />
          <Search onSearch={handleSearch} />
          <Stack direction={'column'}>
            <Box>
              <Text fontWeight={'bold'} color={'white'}> Welcome to Movie Image Gallery! </Text>
            </Box>
            <Box>
              <Text fontWeight={'bold'} color={'white'}> ENJOY! </Text>
            </Box>
          </Stack>
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
