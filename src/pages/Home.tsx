import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  SimpleGrid,
  useBreakpointValue,
  Icon,
  Fade,
  Center,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { FaMusic, FaChartBar, FaClock, FaShareAlt } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(29, 185, 84, 0.5); }
  50% { box-shadow: 0 0 20px rgba(29, 185, 84, 0.8); }
  100% { box-shadow: 0 0 5px rgba(29, 185, 84, 0.5); }
`

const features = [
  {
    icon: FaMusic,
    title: 'Top Tracks & Artists',
    desc: 'See your most listened-to songs and artists at a glance.',
  },
  {
    icon: FaChartBar,
    title: 'Listening Patterns',
    desc: 'Analyze your music habits and trends over time.',
  },
  {
    icon: FaClock,
    title: 'Recently Played',
    desc: 'Track your latest listening sessions and rediscover favorites.',
  },
  {
    icon: FaShareAlt,
    title: 'Share Stats',
    desc: 'Show off your stats and musical taste with friends.',
  },
]

const Home: React.FC = () => {
  const { login, isAuthenticated } = useAuth()
  const stackPadding = useBreakpointValue({ base: 8, md: 24 })
  const cardBg = useColorModeValue('gray.800', 'gray.900')
  const cardBorder = useColorModeValue('gray.700', 'gray.600')

  return (
    <Box
      position="relative"
      overflow="hidden"
      minH="100vh"
      bgGradient="linear(to-br, spotify.black 60%, #232526 100%)"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(29, 185, 84, 0.1) 0%, transparent 50%)',
        zIndex: 0,
      }}
    >
      <Center minH="70vh" px={4} py={stackPadding} position="relative" zIndex={1}>
        <VStack spacing={8} align="center" maxW="3xl" w="full">
          <Fade in>
            <>
              <Box
                animation={`${float} 6s ease-in-out infinite`}
                position="relative"
                mb={8}
              >
                <Image
                  src="/spotify-icon.png"
                  boxSize={{ base: "120px", md: "160px" }}
                  alt="Spotify Logo"
                  filter="drop-shadow(0 0 20px rgba(29, 185, 84, 0.3))"
                />
              </Box>
              <Heading
                as="h1"
                size="2xl"
                bgGradient="linear(to-r, spotify.green, green.400)"
                bgClip="text"
                textAlign="center"
                fontWeight="extrabold"
                letterSpacing="tight"
                mb={2}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Discover Your Music Journey
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                textAlign="center"
                color="gray.200"
                mb={4}
                maxW="2xl"
                lineHeight="tall"
              >
                Connect with Spotify to explore your listening habits, discover your top tracks and artists, and share your musical journey with friends.
              </Text>
              {!isAuthenticated && (
                <Center w="full">
                  <Button
                    size="lg"
                    colorScheme="green"
                    onClick={login}
                    px={10}
                    fontSize="xl"
                    fontWeight="bold"
                    shadow="2xl"
                    _hover={{
                      boxShadow: '0 0 0 4px #1DB95455',
                      transform: 'scale(1.04)',
                      bg: 'green.500'
                    }}
                    _active={{
                      transform: 'scale(0.98)',
                      bg: 'green.600'
                    }}
                    transition="all 0.2s"
                    mb={2}
                  >
                    Connect with Spotify
                  </Button>
                </Center>
              )}
            </>
          </Fade>
        </VStack>
      </Center>

      <Box
        mt={{ base: 8, md: 0 }}
        px={4}
        pb={stackPadding}
        position="relative"
        zIndex={1}
        display="flex"
        justifyContent="center"
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={8}
          w="full"
          maxW="6xl"
        >
          {features.map((feature, idx) => (
            <Fade in key={feature.title} delay={0.1 * idx}>
              <Box
                bg={cardBg}
                borderRadius="2xl"
                boxShadow="xl"
                p={6}
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  boxShadow: '0 0 0 4px #1DB95433',
                  transform: 'translateY(-8px) scale(1.02)',
                  bg: 'gray.800',
                  _before: {
                    transform: 'scaleX(1)',
                  },
                }}
                border="1px solid"
                borderColor={cardBorder}
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #1DB954, transparent)',
                  transform: 'scaleX(0)',
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                <Icon
                  as={feature.icon}
                  w={10}
                  h={10}
                  color="spotify.green"
                  mb={3}
                  filter="drop-shadow(0 0 8px rgba(29, 185, 84, 0.3))"
                />
                <Heading size="md" mb={2} color="spotify.green" fontWeight="bold">
                  {feature.title}
                </Heading>
                <Text color="gray.200" fontSize="sm" lineHeight="tall">
                  {feature.desc}
                </Text>
              </Box>
            </Fade>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Home 