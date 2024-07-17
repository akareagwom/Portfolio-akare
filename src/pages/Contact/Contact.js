import { useState } from "react";

const { Box, Text, InputGroup, Input, Flex, Button } = require("@chakra-ui/react")

const Contact =()=>{
    const [formData,setFormData]= useState({name:'',email:'',message:''});

    return(
        <Box w={{base:'301px',lg:'1000px'}}  mx={10} my={10}  color={'black'}>
            <Text fontSize={'24px'} fontWeight={'700px'} >Contact Me</Text>
            <Box display={{base:'block',lg:'flex'}} mt={{base:'2', lg:'8'}} justifyContent={'space-between'}>
                <Box>
                    <Text  mt={{base:'2',lg:'4'}}>Name</Text>
                    <Input variant={'none'} w={{base:'0', lg:'450px'}}  placeholder={'Name'} mt={{base:'2', lg:'10'}} borderRadius={'none'} borderBottom={'1px solid black'}/>
                </Box>
                <Box>
                    <Text mt={{base:'2',lg:'4'}}>Email</Text>
                    <Input variant={'none'} w={{base:'0', lg:'450px'}}  placeholder={'Email'} mt={{base:'2', lg:'10'}} borderRadius={'none'} borderBottom={'1px solid black'}/>
                </Box>
            </Box>
                <Text mt={{base:'2',lg:'10'}}>Message</Text>
                <Box>
                    <Input variant={'none'} placeholder={"Hello, my name is ..."} mt={{base:'2', lg:'10'}} borderRadius={'none'} borderBottom={'1px solid black'}/>
                </Box>
                <Button bg={'#D9D9D9'} borderRadius={'none'} w={{base:'300px',lg:''}} fontSize={'14px'} mt={5} ml={{base:'0', lg:'30%'}} p={6}>Send Message</Button>
        </Box>
    )
}

export default Contact;