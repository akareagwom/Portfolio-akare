import { Box, Heading, AspectRatio,iframe} from "@chakra-ui/react";
import Nav from "./components/nav";
import Article from "./components/article";


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
        <Box bg={'#051622'} p={'5%'}>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
        </Box>
        {/* // This video will have equal sides
<AspectRatio maxW='560px' ratio={1}>
  <iframe
    title='naruto'
    src='motion.mp4'
    allowFullScreen
  />
</AspectRatio> */}
      </Box>
    </>
  )
}
