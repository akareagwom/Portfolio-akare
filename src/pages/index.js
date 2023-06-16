import { Box,Heading,} from "@chakra-ui/react";
import Nav from "./components/nav";
import Article from "./components/article";
import Video from "./components/video";
import Todo from "./components/todo";
import Portfolio from "./components/portfolio";
import Partner from "./components/partner";
import Talk from "./components/talk";
import Resume from "./components/resume";


export default function Home() {

  return (
    <>
      <Box
      bgGradient="linear(to-l,#FF9CD4,#9EC2FF)">
        <Box 
        w='100%'
         >
           <Box
           m='0px'>
            <Video/>
           </Box>
           <Box>
              <Todo/>
           </Box>
           <Box>
           <Heading
            fontSize="26px"
            color="#ffff"
            ml="6%"
            >
                Portfolio
            </Heading>
            <Portfolio/>
            <Portfolio/>
            <Portfolio/>
            <Portfolio/>
           </Box>
           <Box>
            <Partner/>
           </Box>
           <Box>
            <Talk/>
           </Box>
           <Box>
            <Resume/>
           </Box>
        </Box>




      </Box>
    </>
  )
}
