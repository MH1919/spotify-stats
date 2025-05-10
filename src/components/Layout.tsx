import React from 'react'
import { Box, Container, Flex, Button, Heading, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated, login, logout } = useAuth()
  const bgColor = useColorModeValue('spotify.black', 'spotify.black')

  return (
    <Box minH="100vh" bg={bgColor}>
      <Box as="nav" bg={bgColor} px={4} py={4} borderBottom="1px" borderColor="gray.700">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <RouterLink to="/">
              <Heading size="md" color="spotify.green">Spotify Stats</Heading>
            </RouterLink>
            <Flex gap={4}>
              {isAuthenticated ? (
                <>
                  <Button as={RouterLink} to="/dashboard" variant="solid">
                    Dashboard
                  </Button>
                  <Button onClick={logout} variant="outline" colorScheme="green">
                    Logout
                  </Button>
                </>
              ) : (
                <Button onClick={login} variant="solid">
                  Login with Spotify
                </Button>
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Container maxW="container.xl" py={8}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout 