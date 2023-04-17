import { Box, Button, Heading, Text} from "@chakra-ui/react";

const Video = () => {
    return ( 
        <>
       <Box position={'relative'}>
            <Box  filter='auto' 
                brightness='20%'
                pos={'absolute'}>
            <video autoPlay muted loop
             
                top={'-20%'}
                as='video'
                allow='autoplay'
                src="backg.mp4"/>
            </Box>
            <Box pos={'absolute'} px={'30%'} color={'red.400'}>
                <Heading textAlign={'center'} color={'#1BA098'}>Welcome</Heading>
                {/* <Text>Akare Azikang Agwom</Text> */}
                <Button>Get Started</Button>
            </Box>
                
       </Box>
        </>
     );
}
 
export default Video;