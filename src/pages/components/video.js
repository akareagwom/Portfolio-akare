import { Box} from "@chakra-ui/react";

const Video = () => {
    return ( 
        <>
        <Box 
            as='video'
            allow='autoplay'
            src="motion.mp4"/>
        </>
     );
}
 
export default Video;