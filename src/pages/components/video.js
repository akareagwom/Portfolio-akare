import { Box, Button, Card, CardBody, CardHeader, Heading, Text} from "@chakra-ui/react";
import Nav from "./nav";

const Video = () => {
    return ( 
        <>
        <Box
        ml="5%"
        pt="5%"
        >
            <Card
            w="94%"
            h="80vh"
            borderRadius="20px"
            >
                <CardHeader>
                    <Nav></Nav>
                </CardHeader>
                <CardBody>
                    hello
                </CardBody>
            </Card>
        </Box>
       {/* <Box position={'relative'}>
            <Box  filter='auto' 
                brightness='20%'
                pos={'absolute'}>
            <video autoPlay muted loop
             
                top={'-20%'}
                as='video'
                allow='autoplay'
                src="backg.mp4"/>
            </Box>
            <Box pos={'absolute'} px={'25%'} py={'10%'} textAlign={'center'} color={'red.400'}>
                <Heading  color={'#1BA098'} fontSize={'6rem'} >Welcome</Heading>
                <Text>Akare Azikang Agwom</Text>
                <Button color={'#1BA098'} bgGradient='linear(to-r, #1BA098, #051622)'>Get Started</Button>
            </Box>
                
       </Box> */}
        </>
     );
}
 
export default Video;