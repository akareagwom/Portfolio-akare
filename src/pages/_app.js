import '@fontsource/league-gothic'; 
import theme from '../../theme'
import { ChakraProvider} from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
    return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
