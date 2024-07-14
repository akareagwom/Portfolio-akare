import Buttoned from "./components/button";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Todo from "./components/todo";

const { Box } = require("@chakra-ui/react")

const Home =()=>{
    return(
        <Box>
            <Todo/> 
            <Skills/>
            <Portfolio/>
            <Buttoned/>
        </Box>
    )
}

export default Home; 