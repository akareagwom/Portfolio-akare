import {Box, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import {Project} from '../api/data';
import { FaLocationArrow } from "react-icons/fa";

import NextLink from 'next/link'

const ProjectPage =()=>{
    return(
        <Box p={10}>
        
        <Heading
            fontSize="26px"
            textAlign={{base:"center",lg:"start"}}
            color="#000"
            ml="3%"
            mb={10}

            >
               Recent Project
            </Heading>
                <Box
                display={{base:'block',lg:'flex'}}
                flexDir={{ base:'cloumn',lg:'row'}}
                flexWrap={'wrap'}
                justifyContent={{base:'center',lg:'center'}}
                gap={4}
                >
                    {Project.map((item,index)=>(
                        <Box
                        as={motion.div}
                        animate={{ x: 100 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        key={index}
                        borderRadius={10}
                        pos={'relative'}
                        >
                            <NextLink href={item.url} passHref >
                            <Image
                            alt="assets"
                            filter='auto'
                            brightness={'50%'} 
                            objectFit={'cover'}
                            // boxSize={'100%'}
                            w={{base:'398px',lg:'300px'}} 
                            h={{base:'202px'}}  
                            src={item.image}/>
                            
                            </NextLink>
                            <Box p={6} w={{lg:'300px'}} bg={'black'} >
                                <Flex justifyContent={'space-between'}>
                                    <Heading fontSize={16}>{item.title}</Heading>
                                    <NextLink href={item.url} passHref>live <Icon fontSize={10} as={FaLocationArrow}/></NextLink>
                                </Flex>
                                <Text  fontSize={11} color={'white'}>{item.desc}</Text>
                            </Box>
                        </Box>
                    ))}

            </Box>
        </Box>

    )
}
export default ProjectPage;