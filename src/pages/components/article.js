import { Box, Card, CardBody, CardHeader, Image, Text,Flex, Heading,Icon,Button } from "@chakra-ui/react";
import {MdPreview} from "react-icons/md";
import {BsBoxArrowUpRight} from "react-icons/bs"

const Article = () => {
    return ( 
        <>
        <Box>
        <Card variant={'unstyled'} bg={'#fff'} borderRadius="20px" h="50vh" w={{base:'87%',md:'87%'}} m={{base:'7%',md:'7%'}} >
                {/* <Image src="preview.jpg" filter='auto' borderTopRadius={'3%'} brightness='20%' /> */}
                
                <CardBody 
                color={'black'} 
                display='flex'
                flexDir={{base:"column",lg:"row"}} 
                justifyContent={{lg:'space-between'}}>
                    
                    <Box>
                        <Image src="lendsqr.png" alt="assets" 
                        mt={'6'}
                        ml={{base:"10%", lg:"45%"}}
                        filter='auto'
                        brightness={'70%'}
                        borderRadius="10px"
                        w={{base:"80%",lg:"50%"}}
                        />
                    </Box>
                    <Box
                    // textAlign={'center'}
                    // w={{base:"50%"}}
                    pl={{base:"8%"}}
                    pr={{base:"2%"}}
                    

                    >
                        <Heading fontSize={{base:"20px"}}>
                            clock
                        </Heading>
                        <Text fontSize={{base:"14px"}}>tells time whenever its needed it is in am and pm utc area bllllaaaccckk</Text>
                        <Flex justifyContent={'space-between'} w={{base:"80%"}}>
                            <Button>
                                preview
                                <Icon as={MdPreview} />
                            </Button>
                            <Button>
                                live
                                <Icon as={BsBoxArrowUpRight}/>
                            </Button>
                        </Flex>
                    </Box>
                </CardBody>
            </Card>
        </Box>
        </>
     );
}
 
export default Article;