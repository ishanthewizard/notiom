import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 700,
        color: 'gray'
      }
    }
  },
  textStyles: {
    h1: {
      fontSize: '78px',
      fontWeight: 700,
      color: 'gray'
    },
    h2: {
      fontSize: '52px',
      fontWeight: 700,
      color: 'gray'
    },
    body: {
      fontSize: '20px',
      fontWeight: 700,
      color: 'gray'
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '10px',
        backgroundColor: '#2F80ED',
        color: 'white'
      }
    }
  }
})
