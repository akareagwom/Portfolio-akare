import { Box,Heading,} from "@chakra-ui/react";
import Video from "./Home/components/video";
import Footer from "./Home/components/footer";
import Project from "./projects/project"; 
import { useState } from "react";
import About from "./About/About";
import Init from "./Home/init";

//font
import '@fontsource/league-gothic'; 
import Contact from "./Contact/Contact";


export default function Home() {
  const [view, setView]= useState('home');

  const renderComponent =()=>{
    switch (view) {
      case 'home':
        return <Init/>;
        case 'about':
                return <About />;
            case 'services':
                return <Services />;
            case 'contact':
                return <Contact />;
            default:
                return <Init />;
      
    }
  }

  return (
    <>
      <Box
      // bgGradient="linear(to-l,#FF9CD4,#9EC2FF)"
      bg="white"
      color="white"
      >
        
        <Box 
        w='100%'
         >
          <Box
          m='0px'>
           <Video setView={setView}/>
          </Box>
          <Box>
            {renderComponent()}
          </Box>

           {/* 
           <Box>
              <Todo/>
           </Box>
           <Box>
            <Skills/>
           </Box>
           <Box>
            <Portfolio/>
           </Box>
           <Box>
            <Button/>
           </Box> */}
           
           <Box>
             <Footer/>
           </Box>
        </Box>




      </Box>
    </>
  )
}
