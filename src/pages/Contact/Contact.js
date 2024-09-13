import { useState } from "react";

const { Box, Text, InputGroup, Input, Flex, Button, useToast} = require("@chakra-ui/react")

const Contact =()=>{
    const [formData,setFormData]= useState({name:'',email:'',message:''});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const response = await fetch('https://formspree.io/f/xyzgzovq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        setIsSubmitting(false);
    
        if (response.ok) {
          toast({
            title: 'Email sent successfully!',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast({
            title: 'Error sending email.',
            description: 'Please try again later.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      };
    

    return(
        <Box w={'100%'} px={20} my={10}  color={'black'}>
            {/* <Text fontSize={'24px'} fontWeight={'700px'} >Contact Me</Text> */}
            <form onSubmit={handleSubmit}>

            <Box color={'white'}   mt={{base:'2', lg:'8'}}>
                <Box>
                    <Text  mt={{base:'2',lg:'4'}}>Name</Text>
                    <Input
                     variant={'none'} 
                    //  w={{base:'300px', lg:'300px'}}  
                     mt={{base:'2', lg:'10'}} 
                     borderRadius={'none'} 
                     bg={'none'}
                     borderBottom={'2px solid white'}
                     type="text"
                     placeholder={'Name'}
                     name="name"
                     required
                     value={formData.name}
                     onChange={handleChange} 
                     />
                </Box>
                <Box>
                    <Text mt={{base:'2',lg:'4'}}>Email</Text>
                    <Input 
                    variant={'none'} 
                    // w={{base:'300px', lg:'300px'}}  
                    mt={{base:'2', lg:'10'}} 
                    borderRadius={'none'} 
                    borderBottom={'2px solid white'}
                    placeholder={'Email'} 
                    bg={'none'}
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    />
                </Box>
            </Box>
                <Text color={'white'} mt={{base:'2',lg:'10'}}>Message</Text>
                <Box>
                    <Input
                    value={formData.message}
                    onChange={handleChange}
                    name="message" 
                    variant={'none'} 
                    bg={'none'}
                    // w={{base:'300px', lg:'780px'}}  
                    placeholder={"Hello, my name is ..."} 
                    mt={{base:'2', lg:'10'}} 
                    borderRadius={'none'} 
                    borderBottom={'2px solid white'}
                    />
                </Box>
                <Button bg={'#D9D9D9'} borderRadius={'none'} w={'100%'} fontSize={'14px'} mt={10} ml={{base:'0', lg:'30%'}} p={6} type="submit" isLoading={isSubmitting}>Send Message</Button>
            </form>
        </Box>
    )
}

export default Contact;