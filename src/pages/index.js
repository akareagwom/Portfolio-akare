import { Box, Heading } from "@chakra-ui/react";
import Nav from "./components/nav";


export default function Home() {
  return (
    <>
      <Box>
        <Box 
        h='50vh'
        w='100%'
        // backgroundImage={'port2.jpg'} 
        // backgroundRepeat={'no-repeat'}
        // backgroundPosition={'center'}
        // backgroundSize={'cover'}
        // brightness={'40%'}
         >
           <Box>
            <Nav />
              
            
           </Box>
        </Box>
      </Box>
    </>
  )
}
