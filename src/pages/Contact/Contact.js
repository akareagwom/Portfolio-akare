const { Box, Text, InputGroup, Input, Flex } = require("@chakra-ui/react")

const Contact =()=>{
    return(
        <Box mx={8} my={6} color={'black'}>
            <Text>Contact Me</Text>
            <Flex>
                <Text>Name</Text>
                <InputGroup variant={'none'}>
                    <Input w={{base:'',lg:'450px'}} mt={2} borderRadius={'none'} borderBottom={'1px solid black'}/>
                </InputGroup>
                <Text>Email</Text>
                <InputGroup variant={'none'}>
                    <Input w={{base:'',lg:'450px'}} mt={2} borderRadius={'none'} borderBottom={'1px solid black'}/>
                </InputGroup>
            </Flex>
                <Text>Message</Text>
                <InputGroup variant={'none'}>
                    <Input mt={2} borderRadius={'none'} borderBottom={'1px solid black'}/>
                </InputGroup>
                
        </Box>
    )
}

export default Contact;