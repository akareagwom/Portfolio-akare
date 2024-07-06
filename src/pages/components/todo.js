import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { BsFillWebcamFill } from "react-icons/bs";
import {FaGlobe} from 'react-icons/fa';
import {FiGitMerge} from 'react-icons/fi'
const Todo = () => {
    return ( 
        <>
        <Box
        color="#000"
        bg={'white'}
        h='85vh'
        mt={'7%'}
        p="6%"
        id="about"
        textAlign={{base:"left",lg:"start"}}
        >
            <Heading
            fontSize="26px"
            fontWeight={300}
            mt={'10%'}
            fontFamily={'monospace'}
            >
                About me
            </Heading>
            <Text mt={'6%'}>
            Implement the user interface (UI) design provided by UX/UI designers. Ensure that the design is responsive and works well across different devices and screen sizes.
            Enhance user experience by adding interactivity and dynamic behavior using JavaScript and JavaScript libraries or frameworks like React
            Use version control systems like Git to collaborate with other developers and keep track of code changes.

            </Text>
            {/* <Box
            display={{base:"block",lg:"flex"}}
            justifyContent="space-evenly"
            mt="4%"
            >
                <Box>
                    <Icon color={'black'} borderRadius='100%' bg='#08830D'  as={BsFillWebcamFill}/>
                    <Text>
                    </Text>
                </Box>
                <Box>
                    <Icon color={'black'} borderRadius='100%' bg='#08830D'  as={FaGlobe}/>
                    <Text>
                    </Text>
                </Box>
                <Box>
                    <Icon color={'black'} borderRadius='100%' bg='#08830D'  as={FiGitMerge}/>
                    <Text>
                    </Text>
                </Box>
            </Box> */}
        </Box>
        </>
     );
}
 
export default Todo;