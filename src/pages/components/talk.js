import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Image, SimpleGrid, Text,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton, } from "@chakra-ui/react";
import {BsTelephoneFill, BsSendFill, BsGithub, BsLinkedin, BsInstagram, BsTwitter,} from "react-icons/bs" 

const Talk = () => {
    return ( 
        <Box
        ml="5%"
        py="5%"
        id="contact"
        >
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
                        columns={2}
                        // gap={10}
                        columnGap={2}
                        
                          >
                            <Box
                            display="flex"
                            lineHeight="24px"
                            alignItems="baseline"
                            >
                                <Icon  as={BsTelephoneFill}/>
                                <Text>+234 905 681 7953</Text>
                            </Box>
                            <Box
                            display="flex"
                            lineHeight="24px"
                            alignItems="baseline"
                            >
                            <Icon  as={BsGithub}/>
                            <Text>https://github.com/akareagwom</Text>
                            <Text></Text>
                            </Box>
                            <Box
                            display="flex"
                            lineHeight="24px"
                            alignItems="baseline"
                            >
                            <Icon  as={BsLinkedin}/>
                            <Text>@akareagwom</Text>
                            </Box>
                            <Box
                            display="flex"
                            lineHeight="24px"
                            alignItems="baseline"
                            >
                            <Icon  as={BsSendFill}/>
                            <Text>akareazikang20@gmail.com</Text>
                            </Box>
                            <Box
                            display="flex"
                            lineHeight="24px"
                            alignItems="baseline"
                            >
                            <Icon  as={BsTwitter}/> 
                            <Text>@akareagwom</Text>
                            </Box>
                            <Box
                            display="flex"
                            lineHeight="24px"
                            alignItems="baseline"
                            >
                            <Icon  as={BsInstagram}/> 
                            <Text>@beebela03</Text>
                            </Box>
                            {/* <BsTelephoneFill/> */}
                        </SimpleGrid>
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
                            <Popover>
  <PopoverTrigger>
    <Button>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>
                        </Box>
                    </Box>
                    <Box
                    borderRadius="50%">
                        <Image
                         borderRadius="50%"
                         src="port1.jpg"
                         alt="assets"/>
                    </Box>
                </CardBody>
            </Card>
        </Box>
     );
}
 
export default Talk;