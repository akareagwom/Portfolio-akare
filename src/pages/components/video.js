import { Box, Button, Card, CardBody, CardHeader, Heading, Image, Text,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Icon,
    Flex,} from "@chakra-ui/react";

import Nav from "./nav";
import '../../styles/Home.module.css'
import Media from "./media";


//icons
import { TbMenuDeep } from "react-icons/tb";
import { BiMenuAltRight } from "react-icons/bi";

const Video = () => {
    return ( 
        <>
        <Box
        bg={'black'}
        mt="0%"
        h={'100vh'}
        id="home"
        >
            <Flex p={8} justifyContent={'space-between'}>
                <Heading>hola</Heading>
                <Icon fontSize={50} as={BiMenuAltRight} />
            </Flex>
            <Box textAlign={'center'} mt={40}>
                <Heading>Akare Azikang Agwom</Heading>
                <Text>Frontend Developer</Text>
            </Box>
            
            
        </Box>
       
        </>
     );
}
 
export default Video;