import { Box, Button, Card, CardBody, CardHeader,FormControl,
    Textarea,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import {BsTelephoneFill, BsSendFill, BsGithub, BsLinkedin, BsInstagram, BsTwitter,} from "react-icons/bs" 
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Talk = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ad6xu6', 'template_hi4azl8', form.current, 'aGUvMJfkQsGzffYcu')
      .then((result) => {
          console.log('message sent',result.text);
      }, (error) => {
          console.log('Email could not be sent',error.text);
      });
  };

    return ( 
        <Box
        ml="5%"
        py="5%"
        id="contact"
        >
            <Card
            w="94%"
            h="80vh"
            bg="transparent"
            borderRadius="20px"
            >
                <CardHeader>
                    
                    <Text
                    bgGradient={[
                        'linear(to-tr, #FFFF,#9EC2FF)',
                        'linear(to-t, #FF9CD4,#9EC2FF)',
                        'linear(to-b, #FF9CD4,#9EC2FF)',
                      ]}
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                    >
                    Let&apos;s talk
                    </Text>
                </CardHeader>
                <CardBody
                display="flex"
                justifyContent="space-evenly">
                
                    <Box
                    borderRadius="50%">
                        
                    <FormControl ref={form} onSubmit={sendEmail}>
                    <FormLabel>Full Name</FormLabel>
                        <Input type='text' name="from_name" />
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' name="from_email" />
                        <Textarea mt={'2'} placeholder='Your Message' name="message" />
                        <Button type='submit'>Send</Button>
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    </Box>
                </CardBody>
            </Card>
        </Box>
     );
}
 
export default Talk;