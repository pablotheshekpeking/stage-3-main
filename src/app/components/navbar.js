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
            <Box> <HamburgerIcon /> </Box>
            <Box w={'25%'}>
                <Link href={'../'}><Button>Logout</Button></Link>
            </Box>
        </Stack>
    );
}

export default Navbar;