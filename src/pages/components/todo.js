import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { RiVoiceprintLine } from "react-icons/ri";

const Todo = () => {
    return ( 
        <>
        <Box
        color="#fff"
        p="6%">
            <Heading
            fontSize="26px"
            >
                What I Do
            </Heading>
            <Box
            display="flex"
            justifyContent="space-evenly"
            mt="4%"
            >
                <Box>
                    <Icon color={'black'} borderRadius='100%' w="5%" h="20%" bg='white' as={RiVoiceprintLine}/>
                    <Text>
                    Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
                    </Text>
                </Box>
                <Box>
                    <Icon color={'black'} borderRadius='100%' w="5%" h="20%" bg='white' as={RiVoiceprintLine}/>
                    <Text>
                    Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
                    </Text>
                </Box>
                <Box>
                    <Icon color={'black'} borderRadius='100%' w="5%" h="20%" bg='white' as={RiVoiceprintLine}/>
                    <Text>
                    Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
                    </Text>
                </Box>
            </Box>
        </Box>
        </>
     );
}
 
export default Todo;