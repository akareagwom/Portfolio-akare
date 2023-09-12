import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { BsFillWebcamFill } from "react-icons/bs";
import {FaGlobe} from 'react-icons/fa';
import {FiGitMerge} from 'react-icons/fi'
const Todo = () => {
    return ( 
        <>
        <Box
        color="#fff"
        p="6%"
        id="about"
        textAlign={{base:"center",lg:"start"}}
        >
            <Heading
            fontSize="26px"
            >
                What I Do
            </Heading>
            <Box
            display={{base:"block",lg:"flex"}}
            justifyContent="space-evenly"
            mt="4%"
            >
                <Box>
                    <Icon color={'black'} borderRadius='100%' bg='#08830D'  as={BsFillWebcamFill}/>
                    <Text>
                    Implement the user interface (UI) design provided by UX/UI designers. Ensure that the design is responsive and works well across different devices and screen sizes.
                    </Text>
                </Box>
                <Box>
                    <Icon color={'black'} borderRadius='100%' bg='#08830D'  as={FaGlobe}/>
                    <Text>
                    Enhance user experience by adding interactivity and dynamic behavior using JavaScript and JavaScript libraries or frameworks like React
                    </Text>
                </Box>
                <Box>
                    <Icon color={'black'} borderRadius='100%' bg='#08830D'  as={FiGitMerge}/>
                    <Text>
                    Use version control systems like Git to collaborate with other developers and keep track of code changes.
                    </Text>
                </Box>
            </Box>
        </Box>
        </>
     );
}
 
export default Todo;