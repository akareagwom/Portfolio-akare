import { Box } from "@chakra-ui/react";
import { FaLinkedin,FaFacebookSquare,FaGithubSquare,FaEnvelope  } from "react-icons/fa";

const Media = () => {
    return ( 
        <Box 
        bg={'black'}
        w={'30%'}
        >
            <FaLinkedin />
            <FaFacebookSquare />
            <FaGithubSquare />
            <FaEnvelope />
        </Box>
     );
}
 
export default Media;