import { Box } from "@chakra-ui/react";
import { FaLinkedin,FaFacebookSquare,FaGithubSquare,FaEnvelope  } from "react-icons/fa";

const Media = () => {
    return ( 
        <Box 
        bg={'black'}
        w={'100%'}
        px={4}
        py={10}
        borderTopRightRadius={'10px'}
        borderBottomRightRadius={'10px'}
        >
            <Box p={2}>
                <FaLinkedin width={'120px'} />
            </Box>
            <Box p={2}>
                <FaFacebookSquare />
            </Box>
            <Box p={2}>
                <FaGithubSquare />
            </Box>
            <Box p={2}>
                <FaEnvelope />
            </Box>
        </Box>
     );
}
 
export default Media;