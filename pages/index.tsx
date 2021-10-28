import type { NextPage } from 'next'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from '../components/App';

const Home: NextPage = () => {
  return (
    <ChakraProvider>

      <ColorModeScript initialColorMode="dark"></ColorModeScript>
      <App />
    </ChakraProvider>
  )
}

export default Home
