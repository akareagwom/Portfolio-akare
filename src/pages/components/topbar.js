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
              <ModalCloseButton/>
                
                <ModalBody>
                  <Flex alignItems="center" maxW="1200px" mx="auto">
                    {/* Desktop Navigation */}
                    <Flex
                      as="nav"
                      align="center"
                      display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                    >
                      <Button variant="ghost" color="white" mr={4}>
                        Home
                      </Button>
                      <Button variant="ghost" color="white" mr={4}>
                        About
                      </Button>
                      <Button variant="ghost" color="white">
                        Contact
                      </Button>
                    </Flex>
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
  

  
  
  
  