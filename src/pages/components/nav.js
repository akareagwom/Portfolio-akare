import { Box,Button, Heading, TabList, Tabs,Tab, Flex,Image, useColorMode,useColorModeValue, useDisclosure,IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

const Nav = () => {
    const {isOpen,onToggle}= useDisclosure();

    
    return ( 
        <>
            <Flex alignItems={'center'} p={2} fontFamily={'sans-serif'} justify={'space-between'}
            w="100%">
     
                <Box mt="2">
                <Box fontSize={'1.5rem'}  color='white' fontFamily={'Gruppo'} >
                    <Heading  pl={20} py={2} ml={{base:'20%',lg:"0%"}}>Akare</Heading>
                    
                </Box>
                </Box>
                <Tabs
                mt="2"
                 pos={{base:"absolute"}}
                 w={{base:"90%"}}
                 left={{base:"15%",lg:'60%'}}
                 variant={'unstyled'}>
                    <TabList 
                    display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                    visibility={{base:"hidden",md:"visible",lg:"visible"}}
                    p={{base:"0"}}
                    color='white'>
                        <Link to="home" spy={true} smooth={true} offset={5} duration={700}>
                        <Tab _selected={{color:'gray',borderBottomColor:'2px solid gray'}}>Home</Tab>
                        </Link>

                        <Link to="about" spy={true} smooth={true} offset={5} duration={700}>
                        <Tab _selected={{color:'gray',borderBottomColor:'2px solid gray'}}>About</Tab>
                        </Link>

                        <Link to="portfolio" spy={true} smooth={true} offset={5} duration={700}>
                        <Tab _selected={{color:'gray',borderBottomColor:'2px solid gray'}}>Portfolio</Tab>
                        </Link>

                        <Link to="skills" spy={true} smooth={true} offset={5} duration={700}>
                        <Tab _selected={{color:'gray',borderBottomColor:'2px solid gray'}}>Skills</Tab>
                        </Link>

                        <Link to="contact" spy={true} smooth={true} offset={5} duration={700}>
                        <Tab _selected={{color:'gray',borderBottomColor:'2px solid gray'}}>Contact</Tab>
                        </Link>
                        
                        
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
                              <Link to="home" spy={true} smooth={true} offset={5} duration={700}>
                              <Tab _selected={{color:'#08830D',borderBottomColor:'2px solid #08830D'}}>Home</Tab>
                              </Link>
      
                              <Link to="about" spy={true} smooth={true} offset={5} duration={700}>
                              <Tab _selected={{color:'#08830D',borderBottomColor:'2px solid #08830D'}}>About</Tab>
                              </Link>
      
                              <Link to="portfolio" spy={true} smooth={true} offset={5} duration={700}>
                              <Tab _selected={{color:'#08830D',borderBottomColor:'2px solid #08830D'}}>Portfolio</Tab>
                              </Link>

                            <Link to="skills" spy={true} smooth={true} offset={5} duration={700}>
                            <Tab _selected={{color:'#08830D',borderBottomColor:'2px solid #08830D'}}>Skills</Tab>
                            </Link>
      
                              <Link to="contact" spy={true} smooth={true} offset={5} duration={700}>
                              <Tab _selected={{color:'#08830D',borderBottomColor:'2px solid #08830D'}}>Contact</Tab>
                              </Link>
                              
                              {/* <Button onClick={toggleColorMode}>
                                  {toggleColorMode ? <CiLight/>:<CiDark/>}
                              </Button> */}
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
            color="#08830D"
            border="none"
            aria-label="Toggle menu"
          />
                    
                </Tabs>
            </Flex>
        </>
     );
}
 
export default Nav;