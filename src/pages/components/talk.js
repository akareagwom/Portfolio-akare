import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Image, SimpleGrid, Text, } from "@chakra-ui/react";
import {BsTelephoneFill, BsSendFill, BsGithub, BsLinkedin, BsInstagram, BsTwitter,} from "react-icons/bs" 

const Talk = () => {
    return ( 
        <Box
        ml="5%"
        py="5%">
            <Card
            w="94%"
            h="80vh"
            borderRadius="20px"
            >
                <CardHeader>
                    
                    <Text
                    bgGradient={[
                        'linear(to-tr, #FF9CD4,#9EC2FF)',
                        'linear(to-t, #FF9CD4,#9EC2FF)',
                        'linear(to-b, #FF9CD4,#9EC2FF)',
                      ]}
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                    >
                    Let's talk
                    </Text>
                </CardHeader>
                <CardBody
                display="flex"
                justifyContent="space-evenly">
                    <Box
                    w="40%">
                        <SimpleGrid
                        //  bgGradient={[
                        //     'linear(to-tr, #FF9CD4,#9EC2FF)',
                        //     'linear(to-t, #FF9CD4,#9EC2FF)',
                        //     'linear(to-b, #FF9CD4,#9EC2FF)',
                        //   ]}
                        //   bgClip="text"
                        
                          >
                            <Icon  as={BsTelephoneFill}/>
                            <Icon  as={BsTelephoneFill}/>
                            <Icon  as={BsTelephoneFill}/>
                            <Icon  as={BsTelephoneFill}/>
                            {/* <BsTelephoneFill/> */}
                        </SimpleGrid>
                        <Text
                        fontSize="2rem">
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
                    <Box
                    borderRadius="50%">
                        <Image
                         borderRadius="50%"
                         src="port1.jpg"/>
                    </Box>
                </CardBody>
            </Card>
        </Box>
     );
}
 
export default Talk;