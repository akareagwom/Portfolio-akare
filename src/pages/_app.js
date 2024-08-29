import '@fontsource/league-gothic'; 
import theme from '../../theme'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { ChakraProvider} from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800, // animation duration in ms
  //     easing: 'ease-in-out', // easing function
  //     once: true, // whether animation should happen only once - while scrolling down
  //   });
  // }, []);
  useEffect(() => {
    AOS.init({
      duration: 800
    });
    AOS.refresh();
  }, []);
    return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
