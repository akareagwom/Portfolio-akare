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
            h="80vh"
            borderRadius="20px"
                display={{base:"flex",lg:"flex"}}
                flexDir={{base:"column",lg:"row"}}
                justifyContent={{base:"center",lg:"space-between"}}
                alignItems={'center'}
            >
                
                
                
                    <Box
                    >
                        <Image
                        // border="3px solid #08830D"
                        //  borderRadius="50%"
                        w={{base:"150px",lg:"550px"}}
                        h={{base:"150px",lg:"85vh"}}
                        src="akare.jpg"
                        // filter = "grayscale(100%)"
                        mixBlendMode={""}
                        // transition='transform 2s'
                        // _hover={{transform:" scale(1.2)"}}
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