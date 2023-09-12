import { Box, Button, Card, CardBody, CardHeader, Heading, Image, Text} from "@chakra-ui/react";
import Nav from "./nav";

const Video = () => {
    return ( 
        <>
        <Box
        ml="5%"
        pt="5%"
        id="home"
        >
            <Box
            w={{base:"94%", lg:"94%"}}
            h="80vh"
            borderRadius="20px"
                display={{base:"flex",lg:"flex"}}
                flexDir={{base:"column",lg:"row"}}
                justifyContent={{base:"center",lg:"space-evenly"}}
                alignItems={'center'}
            >
                
                
                
                    <Box
                    >
                        <Image
                        //  borderRadius="50%"
                        w={{base:"150px",lg:"290px"}}
                        h={{base:"150px",lg:"300px"}}
                        src="akare.jpg"
                        // boxShadow= "0 0 8px 8px gray"
                        //  filter='auto'
                        // brightness={'50%'}
                        border
                        filter = "grayscale(100%)"
                        mixBlendMode={""}
                         alt="asset"/>
                    </Box>
                    <Box
                    textAlign={{base:"center"}}
                    w={{base:"100%",lg:"40%"}}>
                        <Text>
                            Hello I am Akare
                        </Text>
                        <Text
                        fontSize={{base:"16px",lg:"2rem"}}>
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
                
            </Box>
        </Box>
       
        </>
     );
}
 
export default Video;