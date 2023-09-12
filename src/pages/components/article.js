import { Box, Card, CardBody, CardHeader, Image, Text,Flex, Heading,Icon,Button, Link } from "@chakra-ui/react";
import {MdPreview} from "react-icons/md";
import {BsBoxArrowUpRight} from "react-icons/bs"

const Article = () => {
    return ( 
        <>
        <Box>
        <Card variant={'unstyled'} mt="2" bg={'#323232'} borderRadius="none" h="50vh" w={{base:'87%',md:'77%'}}  >
                
                
                <CardBody 
                
                
                // display='flex'
                // flexDir={{base:"column",lg:"row"}} 
                // justifyContent={{lg:'space-between'}}
                >
                    
                    <Box>
                        <Image src="lendsqr.png" alt="assets" 
                        // mt={'6'}
                        // ml={{base:"10%", lg:"45%"}}
                        filter='auto'
                        brightness={'70%'}
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
                            clock
                        </Heading>
                        <Text fontSize={{base:"14px"}}>tells time whenever its needed it is in am and pm utc area bllllaaaccckk</Text>
                        <Flex justifyContent={'space-between'} ml={'74%'} w={{base:"80%"}}>
                            <Link textAlign={'right'} color={'#08830D'}>
                                live
                                <Icon as={BsBoxArrowUpRight}/>
                            </Link>
                        </Flex>
                    </Box>
                </CardBody>
            </Card>
        </Box>
        </>
     );
}
 
export default Article;