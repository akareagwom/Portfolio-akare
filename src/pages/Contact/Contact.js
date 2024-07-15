const { Box, Text, InputGroup, Input, Flex, Button } = require("@chakra-ui/react")

const Contact =()=>{
    return(
        <Box w={{base:'301px'}} mx={8} my={10} color={'black'}>
            <Text>Contact Me</Text>
            <Box display={{base:'block',lg:'flex'}}>
                <Text mt={{base:'2',lg:''}}>Name</Text>
                <InputGroup variant={'none'}>
                    <Input  placeholder={'name'} mt={2} borderRadius={'none'} borderBottom={'1px solid black'}/>
                </InputGroup>
                <Text mt={{base:'2',lg:''}}>Email</Text>
                <InputGroup variant={'none'}>
                    <Input  placeholder={'name'} mt={2} borderRadius={'none'} borderBottom={'1px solid black'}/>
                </InputGroup>
            </Box>
                <Text mt={{base:'2',lg:''}}>Message</Text>
                <InputGroup variant={'none'}>
                    <Input placeholder={'name'} mt={2} borderRadius={'none'} borderBottom={'1px solid black'}/>
                </InputGroup>
                <Button>Send Message</Button>
        </Box>
    )
}

export default Contact;