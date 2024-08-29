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
            <Box data-aos='fade-up' mt={6} textAlign={'center'} pt={{lg:20,base:40}}>
                <Heading>Akare Azikang Agwom</Heading>
                <Text>Frontend Developer</Text>
            </Box>
            <Box
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0 }}
        bg="teal.500"
        w="100%"
        mt={10}
        p={4}
        color="white"
        textAlign="center"
        borderRadius="md"
      >
        <Text fontSize="xl">This box fades up on scroll!</Text>
      </Box>
            
        </Box>
       
        </>
     );
}
 
export default Video;