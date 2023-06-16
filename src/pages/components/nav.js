import { Box,Button, Heading, TabList, Tabs,Tab, Flex,Image, useColorMode,useColorModeValue } from "@chakra-ui/react";
import { CiLight, CiDark } from "react-icons/ci";
import { Link } from "react-scroll";

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("white", "gray.800")
    return ( 
        <>
            <Flex fontFamily={'sans-serif'} justify={'space-between'}
            w="100%">
     
                <Box>
                <Box fontSize={'1.5rem'}  color='#000' fontFamily={'Gruppo'} >
                    <Image 
                    w="50%"
                    ml="80%"
                     src="logo1.jpg" alt=""/>
                </Box>
                </Box>
                <Tabs variant={'unstyled'}>
                    <TabList color='#000'>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                        <Tab _selected={{color:'#9EC2FF',borderBottomColor:'#9EC2FF'}}>Home</Tab>
                        </Link>

                        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                        <Tab _selected={{color:'#9EC2FF',borderBottomColor:'#9EC2FF'}}>About</Tab>
                        </Link>

                        <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
                        <Tab _selected={{color:'#9EC2FF',borderBottomColor:'#9EC2FF'}}>Portfolio</Tab>
                        </Link>

                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        <Tab _selected={{color:'#9EC2FF',borderBottomColor:'#9EC2FF'}}>Contact</Tab>
                        </Link>
                        
                        <Button onClick={toggleColorMode}>
                            {toggleColorMode ? <CiLight/>:<CiDark/>}
                        </Button>
                    </TabList>
                </Tabs>
            </Flex>
        </>
     );
}
 
export default Nav;