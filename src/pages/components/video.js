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
            <Box pos={'absolute'} px={'25%'} py={'10%'} textAlign={'center'} color={'red.400'}>
                <Heading  color={'#1BA098'} fontSize={'6rem'} >Welcome</Heading>
                {/* <Text>Akare Azikang Agwom</Text> */}
                <Button color={'#1BA098'} bgGradient='linear(to-r, #1BA098, #051622)'>Get Started</Button>
            </Box>
                
       </Box>
        </>
     );
}
 
export default Video;