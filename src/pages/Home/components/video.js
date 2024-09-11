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
        <Flex
        flexDir={'column'}
        justifyContent={'space-between'}
        mt="0%"
        h={'100vh'}
        w={'100%'}
        id="home"
        >
            <Navbar setView={setView} />
            <Box  mt={5} textAlign={'start'}  p={20} lineHeight={9} pt={{lg:0,base:20}}>
                <Heading >Hey, I'm Akare</Heading>
                <Text fontSize={24} fontFamily={'monospace'}  >I build websites with a focus on responsive design and accessibility.</Text>
                <Text fontSize={24} >I'm a Frontend Developer, Web &amp; Graphics Designer, and open-source contributor. </Text>
                <Text fontSize={24}  fontFamily={'fantasy'}>Find me on GitHub, LinkedIn, Behance, and Twitter.</Text>
            </Box>
        </Flex>
       
        </>
     );
}
 
export default Video;