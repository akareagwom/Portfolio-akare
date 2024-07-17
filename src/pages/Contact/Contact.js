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
        <Box w={{base:'301px',lg:'1000px'}}  mx={10} my={10}  color={'black'}>
            <Text fontSize={'24px'} fontWeight={'700px'} >Contact Me</Text>
            <form onSubmit={handleSubmit}>

            <Box display={{base:'block',lg:'flex'}} mt={{base:'2', lg:'8'}} justifyContent={'space-between'}>
                <Box>
                    <Text  mt={{base:'2',lg:'4'}}>Name</Text>
                    <Input
                     variant={'none'} 
                     w={{base:'0', lg:'450px'}}  
                     mt={{base:'2', lg:'10'}} 
                     borderRadius={'none'} 
                     borderBottom={'1px solid black'}
                     type="text"
                     placeholder={'Name'}
                     name="name"
                     value={formData.name}
                     onChange={handleChange} 
                     />
                </Box>
                <Box>
                    <Text mt={{base:'2',lg:'4'}}>Email</Text>
                    <Input 
                    variant={'none'} 
                    w={{base:'0', lg:'450px'}}  
                    mt={{base:'2', lg:'10'}} 
                    borderRadius={'none'} 
                    borderBottom={'1px solid black'}
                    placeholder={'Email'} 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </Box>
            </Box>
                <Text mt={{base:'2',lg:'10'}}>Message</Text>
                <Box>
                    <Input
                    value={formData.message}
                    onChange={handleChange}
                    name="message" 
                    variant={'none'} 
                    placeholder={"Hello, my name is ..."} 
                    mt={{base:'2', lg:'10'}} 
                    borderRadius={'none'} 
                    borderBottom={'1px solid black'}
                    />
                </Box>
                <Button bg={'#D9D9D9'} borderRadius={'none'} w={{base:'300px',lg:''}} fontSize={'14px'} mt={5} ml={{base:'0', lg:'30%'}} p={6} type="submit" isLoading={isSubmitting}>Send Message</Button>
            </form>
        </Box>
    )
}

export default Contact;