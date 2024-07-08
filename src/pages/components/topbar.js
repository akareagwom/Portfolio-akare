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
                  <Flex pt={'25%'} color={'black'} alignItems="baseline">
                    {/* Desktop Navigation */}
                      <Text
                        transform="rotate(270deg)"
                        transformOrigin="right bottom"
                        display="inline-block"
                        whiteSpace="nowrap"
                        textTransform={'uppercase'}
                        fontSize={'2rem'}
                        fontWeight={500}
                      >
                       Menu
                      </Text>
                    <Tabs variant={'none'}>
                      <TabList>
                        <Tab>Home</Tab>
                      </TabList>
                      <TabList>
                        <Tab>Projects</Tab>
                      </TabList>
                      <TabList>
                        <Tab>About</Tab>
                      </TabList>
                      <TabList>
                        <Tab>Contact</Tab>
                      </TabList>
                    </Tabs>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
        
        
        {/* Mobile Navigation */}
        {/* {isOpen && (
          <Box py={2}>
            <VStack spacing={4} alignItems="stretch">
              <Button variant="ghost" color="white">
                Home
              </Button>
              <Button variant="ghost" color="white">
                About
              </Button>
              <Button variant="ghost" color="white">
                Contact
              </Button>
            </VStack>
          </Box>
        )} */}
      </Box>
    );
  }
  
  export default Navbar;
  

  
  
  
  