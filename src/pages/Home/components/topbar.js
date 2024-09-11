import {
    Box,
    Flex,
    Heading,
    Spacer,
    Button,
    IconButton,
    useDisclosure,
    Image,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalBody,
    Text,
    Tabs,
    TabList,
    Tab,
  } from '@chakra-ui/react';
  import { HamburgerIcon } from '@chakra-ui/icons';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdFacebook } from 'react-icons/md';
import { FaEdge, FaGithub, FaInstagram, FaLinkedinIn, FaRegWindowClose } from 'react-icons/fa';
  
  function Navbar({setView}) {
    const { isOpen,onClose,onOpen } = useDisclosure();
  
    return (
      <Box px={4} py={2}>
        <Flex borderBottom={'2px solid white'} px={10} pt={6} mx={20} alignItems={'center'} justifyContent={'space-between'}>
                <Heading fontSize="26px" color="white">
                  Akare Azikang Agwom
                </Heading>
                <IconButton variant="none" icon={<BiMenuAltRight/>} />
                
                {/* <IconButton
                  display={{ base: 'block', md: 'block' }}
                  onClick={onOpen}
                  icon={<BiMenuAltRight/>}
                  fontSize="24px"
                  variant="none"
                  color="white"
                  aria-label="Toggle menu"
                /> */}
        </Flex>
            <Modal  isOpen={isOpen} onClose={onClose}>
              <ModalContent variant="none" borderRadius={0} color='#000000' w={{base:"100%",lg:'100vw'}} maxWidth={{ lg: "none" }} bg='white' p={0} m={0} h={'100vh'}>
              
                <ModalBody m={{lg:40,base:10}}>

                  <ModalCloseButton cursor={'pointer'} fontSize={'30px'} />
                  <Box display={{lg:'flex',base:'block'}} justifyContent={'space-between'} alignItems={'baseline'}>

                    <Flex justifyContent={'start'} alignItems={'start'}  mr={{base:'0'}}>
                        <Text
                          transform="rotate(270deg)"
                          transformOrigin="top left"     
                          display="inline-block"
                          whiteSpace="nowrap"
                          textTransform={'uppercase'}
                          fontSize={'20px'}
                          fontWeight={700}
                          mt={16}
                        >
                        Menu
                        </Text>
                    
                      {/* navigation */}
                      <Tabs mt={{base:''}} ml={-10} lineHeight={1} variant={'none'} >
                        <TabList>
                          <Tab onClick={()=>setView('home')} fontSize={'2.5rem'} textTransform={'uppercase'} fontWeight={700}>Home</Tab>
                        </TabList>
                        <TabList>
                          <Tab onClick={()=>setView('projects')} fontSize={'2.5rem'} textTransform={'uppercase'} fontWeight={700}>Projects</Tab>
                        </TabList>
                        <TabList>
                          <Tab onClick={()=>setView('about')} fontSize={'2.5rem'} textTransform={'uppercase'} fontWeight={700}>About</Tab>
                        </TabList>
                        <TabList>
                          <Tab onClick={()=>setView('contact')} fontSize={'2.5rem'} textTransform={'uppercase'} fontWeight={700}>Contact</Tab>
                        </TabList>
                      </Tabs>
                  

                    </Flex>
                      <Box fontSize={'22px'} mt={10} ml={{base:'2'}}>
                        <Text>akare9340@gmail.com</Text>
                        <Text>+234 905 681 7953</Text>
                        <Flex fontSize="25px" w={{base:'100px'}} justifyContent={'space-between'}>
                          <MdFacebook/>
                          <FaGithub/>
                          <FaLinkedinIn/>
                        </Flex>
                      </Box>
                  </Box>
                  
                 
                </ModalBody>
              </ModalContent>
            </Modal>

      </Box>
    );
  }
  
  export default Navbar;
  

  
  
  
  