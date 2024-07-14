import { Box, Button } from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/core";
import {useDisclosure} from "@chakra-ui/react"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const Resume = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return ( 
        <Box>
            <Button onClick={onOpen}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent
//   w="200%"
    
  >
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      Hello
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
        </Box>
     );
}
 
export default Resume;