import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    spotify: {
      black: '#191414',
      green: '#1DB954',
      white: '#FFFFFF',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'spotify.black',
        color: 'spotify.white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
      },
      variants: {
        solid: {
          bg: 'spotify.green',
          color: 'spotify.white',
          _hover: {
            bg: 'spotify.green',
            opacity: 0.8,
          },
        },
      },
    },
  },
}) 