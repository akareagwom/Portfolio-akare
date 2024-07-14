import { Box, Button, Card, CardBody, CardHeader,FormControl,
    Textarea,
    FormLabel,
    Input,
    Grid,
    GridItem,
    FormErrorMessage,
    FormHelperText, Heading, Icon, Image, SimpleGrid, Text, Flex,keyframes,usePrefersReducedMotion } from "@chakra-ui/react";
import {BsTelephoneFill, BsSendFill, BsGithub, BsLinkedin, BsInstagram, BsTwitter,} from "react-icons/bs" 
import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import "../../../styles/Home.module.css";




const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`

const Talk = () => {
    const form = useRef();
    const prefersReducedMotion = usePrefersReducedMotion();

    const myAnimation= prefersReducedMotion
    ? undefined
    : `${spin}infinite 4s`

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
        // ml="5%"
        py="5%"
        px="1%"
        id="contact"
        
        >
           
            <Card
            
            w="94%"
            h="80vh"
            bg="transparent"
            borderRadius="20px"
            className="contact-card"
            >
                <CardHeader>
                    
                    <Text
                    bgGradient={[
                        'linear(to-tr, #FFFF,#08830D)',
                        'linear(to-t, #08830D,#08830D)',
                        'linear(to-b, #FFFF,#08830D)',
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
                justifyContent="center"
                alignItems="center"
                >
                
                    <Box
                     display="flex"
                     justifyContent="center"
                     alignItems="center"
                    borderRadius="50%"
                    animation={myAnimation}
                    _before={{content:'""',position:"absolute",w:"150px",h:"340px",bgGradient:"linear(to-tr, #FFFF,#08830D)",animation:"animate 4s linear infinite", }}
                    className="contact-card">
                        
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