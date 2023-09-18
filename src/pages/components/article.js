import { Box, Card, CardBody, CardHeader, Image, Text,Flex, Heading,Icon,Button, Link, SimpleGrid } from "@chakra-ui/react";
import {MdPreview} from "react-icons/md";
import {BsBoxArrowUpRight} from "react-icons/bs";
import {Project} from '../api/data'
import NextLink from 'next/link'
// import { Link } from '@chakra-ui/react'

const Article = () => {
    return ( 
        <>
        <SimpleGrid
        columns={{base:1,lg:4}}
        spacing={2}
        >
                
                {Project.map((project)=>
        <Card key={project.title} variant={'unstyled'} display='flex' mt="2" bg={'transparent'} borderRadius="none" h="25vh"  >
            <Link as={NextLink} href={project.url} isExternal>
                <CardBody 
                transition='transform 4s'
                _hover={{transform:" scale(1.2)"}}
                bg={'#323232'}
                w={{lg:'80%'}}
                mt='2'
                pos="relative"
                key={project.id} 
                >
                    
                    <Box>
                        <Image src={project.image} alt="assets" 
                        filter='auto'
                        brightness={'50%'}
                        w={{base:"80%",lg:"100%"}}
                        h={'25vh'}
                        display={'block'}
                        />
                    </Box>
                    
                    <Box
                    textAlign={'center'}
                    pt='6'
                    pos={'absolute'}
                    top="0"
                    left="0"
                    bg="rgba(0,0,0,0.6)"
                    opacity="0"
                    _hover={{cursor:'pointer', opacity:'2'}}
                    w='100%'
                    h='25vh'
                    pl={{base:"8%"}}
                    pr={{base:"2%"}}
                    color={'white'}
                    >
                        <Heading fontSize={{base:"20px"}}>
                            {project.title}
                        </Heading>
                        <Text fontSize={{base:"14px"}}>{project.desc}</Text>
                        <Flex justifyContent={'space-between'} ml={'74%'} w={{base:"80%"}}>
                        </Flex>
                        
                    </Box>
                </CardBody>
                </Link>
            </Card>
                )}
        </SimpleGrid>
        </>
     );
}
 
export default Article;