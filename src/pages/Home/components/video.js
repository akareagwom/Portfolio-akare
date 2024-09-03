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
import { motion } from 'framer-motion';


//icons
import { TbMenuDeep } from "react-icons/tb";
import { BiMenuAltRight } from "react-icons/bi";
import Navbar from "./topbar";
import FadeUp from "./FadeUp";

const Video = ({setView}) => {
    return ( 
        <>
        <Box
        mt="0%"
        w={'100%'}
        h={'100vh'}
        id="home"
        >
            <Navbar setView={setView} />
            <Box  mt={10} textAlign={'start'} w={'90%'} p={24} lineHeight={9} pt={{lg:20,base:40}}>
                <Heading>Hey, I'm Akare</Heading>
                <Text fontSize={24} >I build websites with a focus on responsive design and accessibility.</Text>
                <Text>I'm a Frontend Developer, Web &amp; Graphics Designer, and open-source contributor. </Text>
                <Text>Find me on GitHub, LinkedIn, Behance, and Twitter.</Text>
            </Box>
        </Box>
       
        </>
     );
}
 
export default Video;