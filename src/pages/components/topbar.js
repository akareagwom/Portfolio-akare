import {
    Box,
    Flex,
    Heading,
    Spacer,
    Button,
    IconButton,
    useDisclosure,
    VStack,
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
import { FaEdge, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
  
  function Navbar() {
    const { isOpen, onToggle,onClose,onOpen } = useDisclosure();
  
    return (
      <Box px={4} py={2}>
        <Flex p={8} justifyContent={'space-between'}>
                <Heading size="lg" color="white">
                  Your Logo
                </Heading>
                <Spacer />
                <IconButton
                  display={{ base: 'block', md: 'none' }}
                  onClick={onOpen}
                  icon={<BiMenuAltRight/>}
                  fontSize={50}
                  variant="none"
                  color="white"
                  aria-label="Toggle menu"
                />
            </Flex>
            <Modal  isOpen={isOpen} onClose={onClose}>
              <ModalContent borderRadius={0} color='#000000' bg='white' p={0} m={0} h={'100vh'}>
              <ModalCloseButton p={8} fontSize={'30px'} />
                
                <ModalBody pos={'relative'}>
                  <Flex  pt="25%" mr={{base:'0'}}>
                      <Text
                        transform="rotate(270deg)"
                        transformOrigin="top left"
                        
                        // mr={40}
                        mt={20}
                        display="inline-block"
                        // whiteSpace="nowrap"
                        textTransform={'uppercase'}
                        fontSize={'20px'}
                        fontWeight={700}
                      >
                       Menu
                      </Text>
                  
                    {/* Desktop Navigation */}
                    <Tabs mb={'20%'} lineHeight={1} variant={'none'} mt={2}>
                      <TabList>
                        <Tab fontSize={'2.5rem'} textTransform={'uppercase'} fontWeight={700}>Home</Tab>
                      </TabList>
                      <TabList>
                        <Tab fontSize={'2.5rem'} textTransform={'uppercase'} fontWeight={700}>Projects</Tab>
                      </TabList>
                      <TabList>
                        <Tab fontSize={'2.5rem'} textTransform={'uppercase'} fontWeight={700}>About</Tab>
                      </TabList>
                      <TabList>
                        <Tab fontSize={'2.5rem'} textTransform={'uppercase'} fontWeight={700}>Contact</Tab>
                      </TabList>
                    </Tabs>
                 

                  </Flex>
                  <Text fontWeight={700}>@akare9340</Text>
                  <Text fontWeight={700}>+234 905 681 7953</Text>
                  <Flex fontSize="25px" w={{base:'100px'}} justifyContent={'space-between'}>
                    <MdFacebook/>
                    <FaGithub/>
                    <FaLinkedinIn/>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>

      </Box>
    );
  }
  
  export default Navbar;
  

  
  
  
  