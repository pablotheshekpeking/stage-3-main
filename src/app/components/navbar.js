'use client'

import React from 'react';
import { Stack, Box, Text, Button } from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

    return (
        <Stack direction={'row'} p={'20px'}>
            <Box w={'33%'}>
                <Avatar size={['sm', 'md', 'md', 'md']}>
                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>
            </Box>
            <Box w={'33%'}>
                <Text textAlign={'center'} color={'white'}>
                    <Link href={'../gallery'}>Movie Image Gallery</Link>
                </Text>
            </Box>
            <Box w={'33%'}>
                    <Button float={'right'}>
                        Logout
                    </Button>
            </Box>
        </Stack>
    );

export default Navbar;
