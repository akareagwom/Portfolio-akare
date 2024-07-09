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
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
  
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
              <ModalContent borderRadius={0} bg='white' p={0} m={0} h={'100vh'}>
              <ModalCloseButton p={8} fontSize={'30px'} />
                
                <ModalBody>
                  <Flex pt={'25%'} justifyContent={'space-between'}  color={'black'} alignItems="baseline">
                    {/* Desktop Navigation */}
                      <Text
                        transform="rotate(270deg)"
                        transformOrigin="top"
                        // mr={40}
                        mt={20}
                        display="inline-block"
                        whiteSpace="nowrap"
                        textTransform={'uppercase'}
                        fontSize={'2rem'}
                        fontWeight={500}
                      >
                       Menu
                      </Text>
                    <Tabs mb={'20%'} variant={'none'}>
                      <TabList>
                        <Tab fontSize={'2rem'} textTransform={'uppercase'} fontWeight={700}>Home</Tab>
                      </TabList>
                      <TabList>
                        <Tab fontSize={'2rem'} textTransform={'uppercase'} fontWeight={700}>Projects</Tab>
                      </TabList>
                      <TabList>
                        <Tab fontSize={'2rem'} textTransform={'uppercase'} fontWeight={700}>About</Tab>
                      </TabList>
                      <TabList>
                        <Tab fontSize={'2rem'} textTransform={'uppercase'} fontWeight={700}>Contact</Tab>
                      </TabList>
                    </Tabs>
                  </Flex>
                  <Flex justifyContent={'space-around'}>
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
  

  
  
  
  