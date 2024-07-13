import { Box,Heading,} from "@chakra-ui/react";
import Nav from "./components/nav";
import Article from "./components/article";
import Video from "./components/video";
import Todo from "./components/todo";
import Portfolio from "./components/portfolio";
import Partner from "./components/partner";
import Talk from "./components/talk";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Button from "./components/button";
import Project from "./projects/project"; 
import { useState } from "react";
import About from "./About/About";


export default function Home() {
  const [view, setView]= useState('home');

  const renderComponent =()=>{
    switch (view) {
      case 'home':
        return <Project/>;
        case 'about':
                return <About />;
            case 'services':
                return <Services />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
      
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
