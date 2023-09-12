import { Box,Heading,} from "@chakra-ui/react";
import Nav from "./components/nav";
import Article from "./components/article";
import Video from "./components/video";
import Todo from "./components/todo";
import Portfolio from "./components/portfolio";
import Partner from "./components/partner";
import Talk from "./components/talk";
import Resume from "./components/resume";
import Navbar from "./components/topbar";


export default function Home() {

  return (
    <>
      <Box
      // bgGradient="linear(to-l,#FF9CD4,#9EC2FF)"
      bg="black"
      color="white"
      >
        
        <Box 
        w='100%'
         >
          <Nav/>
           <Box
           m='0px'>
            <Video/>
           </Box>
           <Box borderTop={"0.5px solid gray"}>
              <Todo/>
           </Box>
           <Box borderTop={"0.5px solid gray"}>
            <Portfolio/>
           </Box>
           <Box borderTop={"0.5px solid gray"}>
            <Partner/>
           </Box>
           <Box borderTop={"0.5px solid gray"}>
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
