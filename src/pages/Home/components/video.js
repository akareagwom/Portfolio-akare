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
import "../../../styles/Home.module.css";
import Media from "./media";


//icons
import { TbMenuDeep } from "react-icons/tb";
import { BiMenuAltRight } from "react-icons/bi";
import Navbar from "./topbar";

const Video = ({setView}) => {
    return ( 
        <>
        <Box
        bg={'black'}
        mt="0%"
        w={'100%'}
        h={'100vh'}
        id="home"
        >
            <Navbar setView={setView} />
            <Box textAlign={'center'} pt={{lg:20,base:40}}>
                <Heading>Akare Azikang Agwom</Heading>
                <Text>Frontend Developer</Text>
            </Box>
            
            
        </Box>
       
        </>
     );
}
 
export default Video;