import { Box, CircularProgress, CircularProgressLabel, Heading,Flex, Text, Icon, Grid } from "@chakra-ui/react";

//icons
import { IoLogoHtml5,IoLogoCss3,IoLogoJavascript,IoLogoVue } from "react-icons/io5";
import { FaGitAlt,FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
    return ( 
        <Box 
        mt={'0%'}
        mb={'10%'}
        px={6}
        id="skills"
        bg={'white'}
        color={'#000'}
        >
           <Flex
           flexDir={'column'}
        //    justifyContent={'center'}
        //    alignItems={'center'}
           >
            <Heading
                fontSize="26px" 
                >My skills</Heading>
                
           </Flex>
           <Grid templateColumns='repeat(2, 1fr)' gap={10} mt="20px" w={"58%"} flexWrap={'wrap'}>
                <Flex alignItems={'center'}>
                    <Icon color={'orange.400'} as={IoLogoHtml5} />
                    <Text>HTML</Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <Icon color={'blue.400'} as={IoLogoCss3} />
                    <Text>CSS</Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <Icon color={'red.400'} as={FaGitAlt} />
                    <Text>GIT</Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <Icon color={'yellow.300'} as={IoLogoJavascript} />
                    <Text>JAVASCRIPT</Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <Icon color={'blue.400'} as={FaReact} />
                    <Text>REACT</Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <Icon color={'green.600'} as={IoLogoVue} />
                    <Text>VUE</Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <Icon color={'orange.400'} as={IoLogoHtml5} />
                    <Text>TAILWIND</Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <Icon color={'orange.400'} as={IoLogoHtml5} />
                    <Text>CHAKRA UI</Text>
                </Flex>
           </Grid>

            {/* <Flex
            justifyContent={'space-around'} 
            // alignItems={'end'}
            mt={'3%'}
            ml={{lg:"20%"}}
            w={{lg:"70%"}}
            >
                <Box textAlign={'center'}>
                    <CircularProgress value={80}  color="#08830D">
                        <CircularProgressLabel p="6%">80%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>HTML</Text>
                </Box>
                <Box textAlign={'center'}>
                    <CircularProgress value={70} color="#08830D">
                        <CircularProgressLabel p="6%">70%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>CSS</Text>
                </Box>
                <Box textAlign={'center'}>
                    <CircularProgress value={60} color="#08830D">
                        <CircularProgressLabel p="6%">60%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>JavaScript</Text>
                </Box>
                <Box textAlign={'center'}>
                    <CircularProgress value={80} color="#08830D">
                    <CircularProgressLabel p="6%">80%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>Design Thinking</Text>
                </Box>
                <Box textAlign={'center'}>
                    <CircularProgress value={50} color="#08830D">
                    <CircularProgressLabel p="6%">50%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>TypeScript</Text>
                </Box>
                <Box textAlign={'center'}>
                    <CircularProgress value={70} color="#08830D">
                    <CircularProgressLabel p="6%">70%</CircularProgressLabel>
                    </CircularProgress>
                    <Text>Version Control</Text>
                </Box>
            </Flex> */}
        </Box>
     );
}
 
export default Skills;