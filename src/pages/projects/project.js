import {Box,Flex, Heading, Icon, Image, Stack, Text,Grid, GridItem  } from '@chakra-ui/react';
import {Project} from '../api/data';
import { FaLocationArrow } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { motion } from 'framer-motion';

import NextLink from 'next/link'

const ProjectPage =()=>{
    return(
        <Box>
                <Grid
                templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}}
                gap={2}
                p={2}
                >
                    {Project.map((item,index)=>(
                        <Box  key={index}>
                            <Box 
                            p={2}
                            w={'210px'}
                            // boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
                            borderRadius='10px'
                            _hover={{
                                bg:'#CEAA9A',
                                boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                            }}
                            
                             >
                                    <Heading fontSize={'20px'}>{item.title}</Heading>
                                <Text fontSize={'20px'} mt={2} color={'white'}>{item.desc}</Text>
                                <Flex mt={2} justifyContent={'space-between'}>
                                    <NextLink href={item.url} passHref>Github <Icon fontSize={10} as={IoIosLink}/></NextLink>
                                    <NextLink href={item.url} passHref>live <Icon fontSize={10} as={IoIosLink}/></NextLink>
                                </Flex>
                            </Box>
                        </Box>
                    ))}

            </Grid>
        </Box>

    )
}
export default ProjectPage;