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
        <Flex p={8} justifyContent={'space-between'}>
                <Heading size="lg" color="white">
                  <Image w={10} src='brand.svg' assets='hala' />
                </Heading>
                
                <IconButton
                  display={{ base: 'block', md: 'block' }}
                  onClick={onOpen}
                  icon={<BiMenuAltRight/>}
                  fontSize={40}
                  variant="none"
                  color="white"
                  aria-label="Toggle menu"
                />
        </Flex>
            <Modal  isOpen={isOpen} onClose={onClose}>
              <ModalContent variant="none" borderRadius={0} color='#000000' w={{base:"100%",lg:'100vw'}} maxWidth={{ lg: "none" }} bg='white' p={0} m={0} h={'100vh'}>
              {/* <FaRegWindowClose/> */}
                
                <ModalBody display={{base:'block',lg:'flex'}} pt={{base:'25%'}} justifyContent={'space-around'} alignItems={'end'}>
                  <ModalCloseButton cursor={'p'} fontSize={'30px'} />
                  <Flex justifyContent={'start'}  mr={{base:'0'}}>
                      <Text
                        transform="rotate(270deg)"
                        transformOrigin="top left"
                        
                        // mr={40}
                        mt={20}
                        display="inline-block"
                        whiteSpace="nowrap"
                        textTransform={'uppercase'}
                        fontSize={'20px'}
                        fontWeight={700}
                      >
                       Menu
                      </Text>
                  
                    {/* Desktop Navigation */}
                    <Tabs mt={{base:'2'}} lineHeight={1} variant={'none'} >
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
                  <Box mt={{base:'6'}} fontSize={'22px'} ml={{base:'2'}}>
                    <Text fontWeight={700}>akare9340@gmail.com</Text>
                    <Text fontWeight={700}>+234 905 681 7953</Text>
                    <Flex fontSize="25px" w={{base:'100px'}} justifyContent={'space-between'}>
                      <MdFacebook/>
                      <FaGithub/>
                      <FaLinkedinIn/>
                    </Flex>
                  </Box>
                </ModalBody>
              </ModalContent>
            </Modal>

      </Box>
    );
  }
  
  export default Navbar;
  

  
  
  
  