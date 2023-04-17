import { Box, Button, Heading, Text} from "@chakra-ui/react";

const Video = () => {
    return ( 
        <>
       <Box position={'relative'}>
        <Box pos={'absolute'}
            top={'-20%'}
            filter='auto' 
            brightness='40%'
            as='video'
            allow='autoplay'
            src="motion.mp4"/>
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