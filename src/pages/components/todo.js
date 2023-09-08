import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { RiVoiceprintLine } from "react-icons/ri";

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
                    <Icon color={'black'} borderRadius='100%' w="5%" h="20%" bg='white' as={RiVoiceprintLine}/>
                    <Text>
                    positive impact in their communities will be invited to attend a life-changing week of skills development, networking and capacity building alongside 50
                    </Text>
                </Box>
                <Box>
                    <Icon color={'black'} borderRadius='100%' w="5%" h="20%" bg='white' as={RiVoiceprintLine}/>
                    <Text>
                    positive impact in their communities will be invited to attend a life-changing week of skills development, networking and capacity building alongside 50
                    </Text>
                </Box>
                <Box>
                    <Icon color={'black'} borderRadius='100%' w="5%" h="20%" bg='white' as={RiVoiceprintLine}/>
                    <Text>
                    positive impact in their communities will be invited to attend a life-changing week of skills development, networking and capacity building alongside 50
                    </Text>
                </Box>
            </Box>
        </Box>
        </>
     );
}
 
export default Todo;