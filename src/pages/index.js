import { Box,Button,Heading,} from "@chakra-ui/react";
import Video from "./Home/components/video";
import Footer from "./Home/components/footer";
import ProjectPage from "./projects/project";
import { useState } from "react";
import About from "./About/About";
import Init from "./Home/init";

//font
import '@fontsource/league-gothic'; 
import Contact from "./Contact/Contact";


export default function Home() {
  const [view, setView]= useState('home');
  const [toggle, setToggle] = useState(0)

  const renderComponent =()=>{
    switch (view) {
      case 'home':
        return <Init/>;
        case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            case 'projects':
              return <ProjectPage/>;
            default:
                return <Init />;
      
    }
  }

  const lightTheme = () =>{
    setToggle(toggle + 1)
  }
  return (
    <>
      <Box
      // bgGradient="linear(to-l,#FF9CD4,#9EC2FF)"
      bg="#101010"
      color="white"
      w='100%'
      px={{base:0, md:20}}
      
      >
        
        <Box 
          bg={'#080808'}
          boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
         >
          <Button onClick={lightTheme}>
            {toggle}
          </Button>
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
