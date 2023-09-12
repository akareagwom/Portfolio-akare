import { Box,Button, Heading, TabList, Tabs,Tab, Flex,Image, useColorMode,useColorModeValue, useDisclosure,IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    // const [show,setShow]= useState();
    const {isOpen,onToggle}= useDisclosure();

    const bg = useColorModeValue("red.500", "red.200")
    const color = useColorModeValue("white", "gray.800")
    return ( 
        <>
            <Flex alignItems={'center'} fontFamily={'sans-serif'} justify={'space-between'}
            w="100%">
     
                <Box>
                <Box fontSize={'1.5rem'}  color='white' fontFamily={'Gruppo'} >
                    <Image 
                    w="40%"
                    ml="20%"
                    backgroundBlendMode={'color-burn'}
                     src="logo1.png" alt=""/>
                </Box>
                </Box>
                <Tabs
                 pos={{base:"absolute"}}
                 w={{base:"90%"}}
                 left={{base:"15%",lg:'60%'}}
                 variant={'unstyled'}>
                    <TabList 
                    display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                    visibility={{base:"hidden",md:"visible",lg:"visible"}}
                    p={{base:"0"}}
                    color='white'>
                        <Link to="home" spy={true} smooth={true} offset={5} duration={500}>
                        <Tab _selected={{color:'#08830D',borderBottomColor:'2px solid #08830D'}}>Home</Tab>
                        </Link>

                        <Link to="about" spy={true} smooth={true} offset={5} duration={500}>
                        <Tab _selected={{color:'#08830D',borderBottomColor:'2px solid #08830D'}}>About</Tab>
                        </Link>

                        <Link to="portfolio" spy={true} smooth={true} offset={5} duration={500}>
                        <Tab _selected={{color:'#08830D',borderBottomColor:'2px solid #08830D'}}>Portfolio</Tab>
                        </Link>

                        <Link to="contact" spy={true} smooth={true} offset={5} duration={500}>
                        <Tab _selected={{color:'#08830D',borderBottomColor:'2px solid #08830D'}}>Contact</Tab>
                        </Link>
                        
                        <Button onClick={toggleColorMode}>
                            {toggleColorMode ? <CiLight/>:<CiDark/>}
                        </Button>
                    </TabList>
                    {/* mobile Navigation */}
                    {isOpen &&(
                          <TabList 
                          display={{base:"block",md:"flex",lg:"flex"}}
                          bg={"black"}
                          borderRadius={'10px'}
                            pos={{base:"relative"}}
                            top={{base:"14"}}
                         p={{base:"20%"}}
                          mt={0}

                        //   visibility={{base:"hidden",lg:"visible"}}
                          color='white'>
                              <Link to="home" spy={true} smooth={true} offset={5} duration={500}>
                              <Tab _selected={{color:'#9EC2FF',borderBottomColor:'2px solid #9EC2FF'}}>Home</Tab>
                              </Link>
      
                              <Link to="about" spy={true} smooth={true} offset={5} duration={500}>
                              <Tab _selected={{color:'#9EC2FF',borderBottomColor:'2px solid #9EC2FF'}}>About</Tab>
                              </Link>
      
                              <Link to="portfolio" spy={true} smooth={true} offset={5} duration={500}>
                              <Tab _selected={{color:'#9EC2FF',borderBottomColor:'2px solid #9EC2FF'}}>Portfolio</Tab>
                              </Link>
      
                              <Link to="contact" spy={true} smooth={true} offset={5} duration={500}>
                              <Tab _selected={{color:'#9EC2FF',borderBottomColor:'2px solid #9EC2FF'}}>Contact</Tab>
                              </Link>
                              
                              <Button onClick={toggleColorMode}>
                                  {toggleColorMode ? <CiLight/>:<CiDark/>}
                              </Button>
                          </TabList>
                    )}

                    <IconButton 
            display={{ base: 'block', md: 'none' }}
            ml={{base:"80%"}}
            _focus={{bg:"none"}}
            // bg={'none'}
            onClick={onToggle}
            icon={<RxHamburgerMenu/>}
            variant="outline"
            color="black"
            border="none"
            aria-label="Toggle menu"
          />
                    
                </Tabs>
            </Flex>
        </>
     );
}
 
export default Nav;