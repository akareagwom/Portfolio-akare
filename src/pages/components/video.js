import { Box, Button, Card, CardBody, CardHeader, Heading, Image, Text} from "@chakra-ui/react";
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
                <CardBody
                display="flex"
                justifyContent="space-evenly">
                    <Box
                    w="40%">
                        <Text>
                            Hello I am Akare
                        </Text>
                        <Text
                        fontSize="2rem">
                            I am a Frontend Developer, I build User Interfaces.
                        </Text>
                        <Box
                        mt="10%"
                        >
                            <Button
                            color="#FF9CD4"
                            w="30%">RESUME</Button>
                            <Button
                            bgGradient="linear(to-l,#FF9CD4,#9EC2FF)"
                            color="#ffff"
                            w="30%"
                            ml="5%">
                                RESUME
                            </Button>
                        </Box>
                    </Box>
                    <Box
                    borderRadius="50%">
                        <Image
                         borderRadius="50%"
                         src="port1.jpg"/>
                    </Box>
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