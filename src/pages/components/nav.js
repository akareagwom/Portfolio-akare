import { Box,Text,Button, Heading, TabList, Tabs,Tab, Flex,Image, useColorMode,useColorModeValue, useDisclosure,IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

const Nav = () => {
    const {isOpen,onToggle}= useDisclosure();

    
    return ( 
        <>
            <Flex>
                <Tabs display={'flex'} color={'white'}>
                    <Tab>Projects</Tab>
                    <Tab>Projects</Tab>
                    <Tab>Projects</Tab>
                </Tabs>
            </Flex>
            <Box>
                <Text>+234 905 681 7953</Text>
                <Text>akare9340@gmail.com</Text>
            </Box>
            
        </>
     );
}
 
export default Nav;