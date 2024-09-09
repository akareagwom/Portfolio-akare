import Contact from "../Contact/Contact";
import ProjectPage from "../projects/project";
import Buttoned from "./components/button";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Todo from "./components/todo";

const { Box } = require("@chakra-ui/react")

const Init =()=>{
    return(
        <Box w={'80%'}>
            <Box>
                <ProjectPage/>
            </Box>
            <Box>
                {/* <Skills/> */}
            </Box>
            <Box>
                <Todo/> 
            </Box>
            <Box>
                <Contact/>
            </Box>
        </Box>
    )
}

export default Init; 