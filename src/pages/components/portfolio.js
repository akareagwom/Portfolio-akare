import { Box, Card, CardBody, CardHeader, Heading, Image, Text  } from "@chakra-ui/react";

const Portfolio = () => {
    return ( 
        <Box>
            <Card variant={'unstyled'} bg={'#fff'} borderRadius="20px" h="50vh" w={{base:'80%',md:'87%'}} m={{base:'10%',md:'7%'}} >
                {/* <Image src="preview.jpg" filter='auto' borderTopRadius={'3%'} brightness='20%' /> */}
                <CardHeader textAlign={'center'}>
                    Project
                </CardHeader>
                <Text textAlign={'center'}>blah blah blah blah blah blah blah blah blah</Text>
                <CardBody color={'black'} display='flex' justifyContent='space-around'>
                    
                    <Text>
                        preview
                    </Text>
                    <Text>
                        live
                    </Text>
                </CardBody>
            </Card>
        </Box>
     );
}
 
export default Portfolio;