'use client'

import React from "react";
import {
    Stack,
    Box,
    Text,
    Button,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from "next/link";
const Navbar = () => {
    return (
        <Stack direction={'row'}>
            <Box w={'33%'}> <HamburgerIcon color={'white'} /> </Box>
            <Box w={'33%'}><Text textAlign={'center'}>Movie Image Gallery</Text></Box>
            <Box w={'33%'}>
                <Link href={'../'}><Button>Logout</Button></Link>
            </Box>
        </Stack>
    );
}

export default Navbar;