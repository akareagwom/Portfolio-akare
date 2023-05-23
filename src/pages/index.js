import { Box, Heading, AspectRatio,iframe} from "@chakra-ui/react";
import Nav from "./components/nav";
import Article from "./components/article";
import Video from "./components/video";


export default function Home() {
  return (
    <>
      <Box
      bgGradient="linear(to-l,#FF9CD4,#9EC2FF)">
        <Box 
        w='100%'
        // backgroundImage={'port2.jpg'} 
        // backgroundRepeat={'no-repeat'}
        // backgroundPosition={'center'}
        // backgroundSize={'cover'}
        // brightness={'40%'}
         >
           <Box
           m='0px'>
            <Video/>
           </Box>
        </Box>
        <Box bg={'#051622'} mt={'50%'}  p={'5%'}>
          <Box display={{md:'flex',base:'block'}}>
          <Article/>
          <Article/>
          <Article/>
          <Article/>
          </Box>
        </Box>





      </Box>
    </>
  )
}
