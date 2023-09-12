import {
    Box,
    Flex,
    Heading,
    Spacer,
    Button,
    IconButton,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react';
  import { HamburgerIcon } from '@chakra-ui/icons';
  
  function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box bg="blue.400" px={4} py={2}>
        <Flex alignItems="center" maxW="1200px" mx="auto">
          <Heading size="lg" color="white">
            Your Logo
          </Heading>
          <Spacer />
          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'block', md: 'none' }}
            onClick={onToggle}
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            aria-label="Toggle menu"
          />
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
        {/* Mobile Navigation */}
        {isOpen && (
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
        )}
      </Box>
    );
  }
  
  export default Navbar;
  

  
  
  
  