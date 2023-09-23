'use client'

import React from 'react';
import { Stack, Box, Text, Button } from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useAuth } from '../path-to-AuthContext'; // Import the useAuth hook

const Navbar = () => {
    const router = useRouter();
    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            router.push('../');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

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
                {currentUser ? (
                    <Button float={'right'} onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <Link href={'../login'}>Login</Link> // Replace with your login route
                )}
            </Box>
        </Stack>
    );
};

export default Navbar;
