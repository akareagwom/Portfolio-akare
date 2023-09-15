import { Box, Card, CardBody, CardHeader, Image, Text,Flex, Heading,Icon,Button, Link, SimpleGrid } from "@chakra-ui/react";
import {MdPreview} from "react-icons/md";
import {BsBoxArrowUpRight} from "react-icons/bs";
import {Project} from '../api/data'

const Article = () => {
    return ( 
        <>
        <SimpleGrid
        columns={{base:1,lg:4}}
        spacing={2}
        >
                
                {Project.map((project)=>
        <Card key={project.title} variant={'unstyled'} display='flex' mt="2" bg={'transparent'} borderRadius="none" h="30vh"  >
                <CardBody 
                transition='transform 2s'
                _hover={{transform:" scale(1.2)"}}
                bg={'#323232'}
                w={{lg:'80%'}}
                mt='2'

                key={project.title}
                
                
                // flexDir={{base:"column",lg:"row"}} 
                // justifyContent={{lg:'space-between'}}
                >
                    
                    <Box>
                        <Image src={project.image} alt="assets" 
                        // mt={'6'}
                        // ml={{base:"10%", lg:"45%"}}
                        filter='auto'
                        brightness={'50%'}
                        // borderRadius="10px"
                        w={{base:"80%",lg:"100%"}}
                        />
                    </Box>
                    <Box
                    // textAlign={'center'}
                    // w={{base:"50%"}}
                    pl={{base:"8%"}}
                    pr={{base:"2%"}}
                    color={'white'}

                    >
                        <Heading fontSize={{base:"20px"}}>
                            {project.title}
                        </Heading>
                        <Text fontSize={{base:"14px"}}>{project.desc}</Text>
                        <Flex justifyContent={'space-between'} ml={'74%'} w={{base:"80%"}}>
                            <Link href={project.url} isExternal textAlign={'right'} color={'#08830D'}>
                                live
                                <Icon as={BsBoxArrowUpRight}/>
                            </Link>
                        </Flex>
                    </Box>
                </CardBody>
            </Card>
                )}
        </SimpleGrid>
        </>
     );
}
 
export default Article;