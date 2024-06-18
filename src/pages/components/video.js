import { Box, Button, Card, CardBody, CardHeader, Heading, Image, Text,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,} from "@chakra-ui/react";
import Nav from "./nav";
import '../../styles/Home.module.css'
import Media from "./media";

const Video = () => {
    return ( 
        <>
        <Box
        bg={'white'}
        mt="0%"
        id="home"
        >
            
            <Box
            w={{base:"94%", lg:"94%"}}
            h="90vh"
            borderRadius="20px"
                display={{base:"flex",lg:"flex"}}
                flexDir={{base:"column",lg:"row"}}
                justifyContent={{base:"center",lg:"space-between"}}
                alignItems={'center'}
            >
                <Box>
                    <Media/>
                </Box>
                   
                    <Box
                    
                    textAlign={{base:"center"}}
                    w={{base:"100%",lg:"40%"}}>
                        <Text
                        fontFamily={'monospace'}
                        fontSize={{base:"16px",lg:"3rem"}}
                        color="black"
                        className="text-stroke"
                        >
                            Hello I am Akare
                        </Text>
                        <Text
                        color="black"
                        fontFamily={'monospace'}
                        fontSize={{base:"16px",lg:"2rem"}}>
                            I MIGHT BE THE DEVELOPER YOU ARE LOOKING FOR
                        </Text>
                        <Box
                        mt="10%"
                        >
                           
                        <Popover colorScheme="#008080">
                        <PopoverTrigger>
                            <Button 
                            bg="transparent"
                            border="3px solid black"
                            color="#000"
                            w="30%"
                            ml="5%">INTRO</Button>
                        </PopoverTrigger>
                        <PopoverContent border="3px solid #008080" bg="white">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader fontSize={'12px'}>Unlocking the Art of Exceptional Web Design!</PopoverHeader>
                            <PopoverBody fontSize={'12px'}>
                                <Box>
                                    <Image
                                    w={{base:"150px",lg:"600px"}}
                                    h={{base:"150px",lg:"90vh"}}
                                    src="astronaut.png"
                                    mixBlendMode={""}
                                    transition='transform 1.5s'
                                    animation={'animate 4s linear infinite'}
                                    _hover={{transform:" translateY(-40px)",animation:'animate 4s linear infinite'}}
                                    alt="asset"/>
                                </Box>
                                <Text>  
                                    What does exceptional web design look like? Explore my portfolio to find out.
                                </Text>
                            </PopoverBody>
                        </PopoverContent>
                        </Popover>
                        </Box>
                    </Box>
                    <Box>
                        <Image
                        ml={'20%'}
                        w={{base:"150px",lg:"600px"}}
                        h={{base:"150px",lg:"90vh"}}
                        src="babes.jpeg"
                        brightness={'40%'}
                         alt="asset"/>
                    </Box>
                
            </Box>
        </Box>
       
        </>
     );
}
 
export default Video;