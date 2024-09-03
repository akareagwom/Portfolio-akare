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
            <Box data-aos='fade-up' mt={6} textAlign={'center'} pt={{lg:20,base:40}}>
                <Heading>Akare Azikang Agwom</Heading>
                <Text>Frontend Developer</Text>
            </Box>
        </Box>
       
        </>
     );
}
 
export default Video;