import Buttoned from "./components/button";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Todo from "./components/todo";

const { Box } = require("@chakra-ui/react")

const Init =()=>{
    return(
        <Box>
            <Box>
                <Portfolio/>
            </Box>
            <Box>
                <Skills/>
            </Box>
            <Box>
                <Todo/> 
            </Box>
            <Box>
                <Buttoned/>
            </Box>
        </Box>
    )
}

export default Init; 