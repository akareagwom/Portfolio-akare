import { Box, Heading, Text, Icon, HStack, VStack, Flex } from "@chakra-ui/react";
import { BsFillWebcamFill } from "react-icons/bs";
import {FaGlobe} from 'react-icons/fa';
import {FiGitMerge} from 'react-icons/fi';
import { RiCircleLine } from "react-icons/ri";
import { CiSliderVertical } from "react-icons/ci";
const Todo = () => {
    return ( 
        <>
        <Box
        color="#ffff"
        fontFamily={'monospace'}
        // bg={'white'}
        // h='55vh'
        display={{base:'block',lg:'flex'}}
        flexDir={'column'}
        // alignItems={'center'}
        w={{base:'',lg:'100%'}}
        px="6%"
        id="about"
        textAlign={{base:"left",lg:"start"}}
        >
            <Heading
            fontSize="26px"
            fontWeight={300}
            mt={'10%'}
            
            >
                About me
            </Heading>

            <Text mt={'6%'}>
            Hello! I'm a passionate and skilled frontend developer with a robust background in creating responsive and user-friendly interfaces. My journey into the world of web development has been fueled by my love for technology and creativity. With a solid foundation in React.js, HTML, CSS, and JavaScript, I thrive on turning complex problems into elegant, user-centric solutions.
            </Text>
            <Flex py={4} gap={2} justifyContent={'space-between'}>
                <VStack>
                    <Heading fontSize={{md:"20px", base:'16px'}}>Background</Heading>
                    <Flex alignItems={'center'}>
                        <Icon as={CiSliderVertical} w={10} h={10}/>
                        
                            <Text fontSize={12}>
                            My journey as a developer started from a deep curiosity about how technology can be harnessed to solve real-world problems.
                            </Text>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Icon as={CiSliderVertical} w={10} h={10}/>
                        
                            <Text fontSize={12}>
                            I have worked on projects ranging from e-learning platforms to audio recording interfaces, honing my skills in creating seamless user experiences.
                            </Text>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Icon as={CiSliderVertical} w={10} h={10}/>
                        
                            <Text fontSize={12}>
                            My focus is on writing clean, maintainable code, while ensuring accessibility and performance are prioritized.
                            </Text>
                    </Flex>
                    
                </VStack>
                <VStack>
                    <Heading fontSize={{md:"20px", base:'16px'}}>Key Responsibilities</Heading>
                    <Flex alignItems={'center'}>
                        <Icon as={CiSliderVertical} w={10} h={10}/>
                        <Box>
                            <Text fontSize={12}>
                            Building and Maintaining Web Applications: Utilizing React.js to develop dynamic and responsive web applications.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Icon as={CiSliderVertical} w={10} h={10}/>
                        <Box>
                            <Text fontSize={12}>
                            Working alongside product and design teams to translate user needs and design specifications into functional applications.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Icon as={CiSliderVertical} w={10} h={10}/>
                        <Box>
                            <Text fontSize={12}>
                            Clean Code Practices: Ensuring all code is clean, well-documented, and follows best practices for maintainability.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Icon as={CiSliderVertical} w={10} h={10}/>
                        <Box>
                            <Text fontSize={12}>
                            Performance and User Experience: Continuously working to improve the performance and user experience of web applications.
                            </Text>
                        </Box>
                    </Flex>
                </VStack>
            </Flex>
        </Box>
        </>
     );
}
 
export default Todo;