import { Box, CircularProgress, CircularProgressLabel, Heading,Flex, Text, Icon, Grid } from "@chakra-ui/react";

//icons
import { IoLogoHtml5,IoLogoCss3,IoLogoJavascript,IoLogoVue } from "react-icons/io5";
import { FaGitAlt,FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTailwindcss, SiChakraui, SiVercel,SiNetlify, SiTypescript} from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";


const Skills = () => {
    return ( 
        <Box 
        mt={6}
        mb={'10%'}
        // ml={{base:'',lg:'30%'}}
        w={{base:'',lg:''}}
        // px={20}
        id="skills"
        color={'#000'}
        >
           <Flex
           flexDir={'column'}
           >

                
           </Flex>
           <Flex color={'white'} pl={{base:14, md:20}} gap={6} mt="100px"  flexWrap={'wrap'}>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={IoLogoHtml5} />
                    <Text fontSize={14}>HTML</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={IoLogoCss3} />
                    <Text fontSize={14}>CSS</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={FaGitAlt} />
                    <Text fontSize={14}>GIT</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={IoLogoJavascript} />
                    <Text fontSize={14}>JAVASCRIPT</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={SiTypescript} />
                    <Text fontSize={14}>TYPESCRIPT</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={FaReact} />
                    <Text fontSize={14}>REACT</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={IoLogoVue} />
                    <Text fontSize={14}>VUE</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={SiTailwindcss} />
                    <Text fontSize={14}>TAILWIND</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={ SiChakraui } />
                    <Text fontSize={14}>CHAKRA UI</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={ FaGithub } />
                    <Text fontSize={14}>GITHUB</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={ SiNetlify } />
                    <Text fontSize={14}>NETLIFY</Text>
                </Flex>
                <Flex _hover={{transform:"translateY(-20px)"}} transition="transform 1s ease-in-out" bg={'#101010'}  w={{base:250, md:150}} p={2} borderRadius={7} boxShadow={'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} justifyContent={'space-between'} alignItems={'center'}>
                    <Icon as={ SiVercel } />
                    <Text fontSize={14}>VERCEL</Text>
                </Flex>
           </Flex>

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