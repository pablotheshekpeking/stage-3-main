'use client'

import React from "react";
import {
    Stack,
    Box,
    Text,
    Button,
} from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from "next/link";
const Navbar = () => {
    return (
        <Stack direction={'row'} p={'20px'}>
            <Box w={'33%'}>
                <Avatar size={['sm', 'md', 'md', 'md']}>
                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar> 
            </Box>
            <Box w={'33%'}><Text textAlign={'center'} color={'white'}>Movie Image Gallery</Text></Box>
            <Box w={'33%'}>
                <Link href={'../'}><Button float={'right'}>Logout</Button></Link>
            </Box>
        </Stack>
    );
}

export default Navbar;