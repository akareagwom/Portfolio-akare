import { Box, Button, Card, CardBody, CardHeader, Heading, Image, Text,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,} from "@chakra-ui/react";
import Nav from "./nav";

const Video = () => {
    return ( 
        <>
        <Box
        // ml='-32'
        mt="2%"
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
                        <Image
                        w={{base:"150px",lg:"600px"}}
                        h={{base:"150px",lg:"90vh"}}
                        src="homme.png"
                        filter = "grayscale(100%)"
                        mixBlendMode={""}
                        transition='transform 2s'
                        animation={'animate 4s linear infinite'}
                        _hover={{transform:" rotate(20deg)",animation:'animate 4s linear infinite'}}
                         alt="asset"/>
                    </Box>
                    <Box
                    
                    textAlign={{base:"center"}}
                    w={{base:"100%",lg:"40%"}}>
                        <Text
                        fontFamily={'monospace'}
                        >
                            Hello I am Akare
                        </Text>
                        <Text
                        fontFamily={'monospace'}
                        fontSize={{base:"16px",lg:"2rem"}}>
                            I am a Frontend Developer, I build User Interfaces.
                        </Text>
                        <Box
                        mt="10%"
                        >
                           
                        <Popover colorScheme="#08830D">
                        <PopoverTrigger>
                            <Button 
                            bg="transparent"
                            border="3px solid #08830D"
                            color="#ffff"
                            w="30%"
                            ml="5%">INTRO</Button>
                        </PopoverTrigger>
                        <PopoverContent border="3px solid #08830D" bg="black">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader fontSize={'12px'}>Unlocking the Art of Exceptional Web Design!</PopoverHeader>
                            <PopoverBody fontSize={'12px'}>What does exceptional web design look like? Explore my portfolio to find out.</PopoverBody>
                        </PopoverContent>
                        </Popover>
                        </Box>
                    </Box>
                
            </Box>
        </Box>
       
        </>
     );
}
 
export default Video;