import { Box, Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";

const Article = () => {
    return ( 
        <>
        <Box>
        <Card variant={'unstyled'} bg={'#fff'} borderRadius="20px" h="50vh" w={{base:'80%',md:'87%'}} m={{base:'10%',md:'7%'}} >
                {/* <Image src="preview.jpg" filter='auto' borderTopRadius={'3%'} brightness='20%' /> */}
                <CardHeader>
                    Project
                </CardHeader>
                <CardBody color={'black'} display='flex' justifyContent='space-between'>
                    
                    <Box>
                    <Text>
                        preview
                    </Text>
                    <Text>
                        live
                    </Text>
                    </Box>
                    <Box>
                        <Image src="lendsqr.png" alt="assets" 
                        ml="45%"
                        border="1px solid black"
                        borderRadius="10px"
                        w="50%"
                        />
                    </Box>
                </CardBody>
            </Card>
        </Box>
        </>
     );
}
 
export default Article;