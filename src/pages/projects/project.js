import {Box, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import {Project} from '../api/data';
import { FaLocationArrow } from "react-icons/fa";
import { motion } from 'framer-motion';

import NextLink from 'next/link'

const ProjectPage =()=>{
    return(
        <Box>
                <Box
                display={{base:'block',lg:'flex'}}
                flexDir={{ base:'cloumn',lg:'row'}}
                flexWrap={'wrap'}
                justifyContent={{base:'center',lg:'center'}}
                gap={4}
                >
                    {Project.map((item,index)=>(
                        <Box>
                            <Box p={6} w={{lg:'250px'}}
                            // boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}
                            borderRadius='10px'
                            _hover={{
                                bg:'#CEAA9A',
                                boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                            }}
                            
                             >
                                    <Heading fontSize={16}>{item.title}</Heading>
                                <Text mt={2} fontSize={11} color={'white'}>{item.desc}</Text>
                                <Flex mt={2} fontSize={14} justifyContent={'space-between'}>
                                    <NextLink href={item.url} passHref>Github <Icon fontSize={10} as={FaLocationArrow}/></NextLink>
                                    <NextLink href={item.url} passHref>live <Icon fontSize={10} as={FaLocationArrow}/></NextLink>
                                </Flex>
                            </Box>
                        </Box>
                    ))}

            </Box>
        </Box>

    )
}
export default ProjectPage;