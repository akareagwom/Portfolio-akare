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
        // bgGradient='linear(to-r, #008080, #FFFF)'
        bg="url(bg4.jpg) no-repeat"
        backgroundSize={'100%'}
        backgroundPosition={'center'}
        //  filter = "grayscale(100%)"
         mixBlendMode={""}
        // backdropBlur={'md'}
        filter='auto'
        // brightness={'40%'}
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
                        fontFamily={'monospace'}
                        fontSize={{base:"16px",lg:"2rem"}}>
                            I AM THE DEVELOPER YOU ARE LOOKING FOR
                        </Text>
                        <Box
                        mt="10%"
                        >
                           
                        <Popover colorScheme="#008080">
                        <PopoverTrigger>
                            <Button 
                            bg="transparent"
                            border="3px solid #008080"
                            color="#ffff"
                            w="30%"
                            ml="5%">INTRO</Button>
                        </PopoverTrigger>
                        <PopoverContent border="3px solid #008080" bg="white">
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