'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Stack, Box, Text } from '@chakra-ui/react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';
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
          <Stack direction={['column', 'column', 'row', 'row']} p={'20px'}>
            <Box w={'50%'}>
              <Box>
                <Text fontWeight={'bold'} color={'white'} fontSize={['20px', '20px', '30px', '30px']}> Hi MENTOR </Text>
              </Box>
              <Box>
                <Text fontWeight={'bold'} color={'white'} fontSize={['15px', '15px', '25px', '25px']}> Welcome to Movie Image Gallery! </Text>
              </Box>
              <Box>
                <Text fontWeight={'bold'} color={'white'} fontSize={['10px', '10px', '20px', '20px']}> Home of all the best movie posters </Text>
              </Box>
            </Box>

            <Box w={['100%', '100%', '50%', '50%']} pt={['20px', '20px', '0', '0']}>
              <StatGroup color={'white'}>
                <Stat>
                  <StatLabel>Users</StatLabel>
                  <StatNumber>345,670</StatNumber>
                  <StatHelpText>
                    <StatArrow type='increase' />
                    23.36%
                  </StatHelpText>
                </Stat>

                <Stat>
                  <StatLabel>Searches Today</StatLabel>
                  <StatNumber>45</StatNumber>
                  <StatHelpText>
                    <StatArrow type='decrease' />
                    9.05%
                  </StatHelpText>
                </Stat>
              </StatGroup>
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
