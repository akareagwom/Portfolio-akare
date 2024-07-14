import '@/styles/globals.css';
import '@fontsource/roboto';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
    return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
