import { Box, Card, CardBody, CardHeader, Image, Text,Flex } from "@chakra-ui/react";

const Article = () => {
    return ( 
        <>
        <Box>
        <Card variant={'unstyled'} bg={'#fff'} borderRadius="20px" h="50vh" w={{base:'87%',md:'87%'}} m={{base:'7%',md:'7%'}} >
                {/* <Image src="preview.jpg" filter='auto' borderTopRadius={'3%'} brightness='20%' /> */}
                <CardHeader>
                    Project
                </CardHeader>
                <CardBody 
                color={'black'} 
                display='flex'
                flexDir={{base:"column",lg:"row"}} 
                justifyContent={{lg:'space-between'}}>
                    
                    <Box>
                        <Image src="lendsqr.png" alt="assets" 
                        ml={{base:"10%", lg:"45%"}}
                        border="1px solid black"
                        borderRadius="10px"
                        w={{base:"80%",lg:"50%"}}
                        />
                    </Box>
                    <Flex>
                        <Text>
                            preview
                        </Text>
                        <Text>
                            live
                        </Text>
                    </Flex>
                </CardBody>
            </Card>
        </Box>
        </>
     );
}
 
export default Article;