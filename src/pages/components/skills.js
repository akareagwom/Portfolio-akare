import { Box, CircularProgress, CircularProgressLabel, Heading,Flex, Text } from "@chakra-ui/react";

const Skills = () => {
    return ( 
        <Box 
        mt={'5%'}
        mb={'10%'}
        id="skills"
        >
           <Flex
           flexDir={'column'}
           justifyContent={'center'}
           alignItems={'center'}
           >
            <Heading
                fontSize="26px"
                textAlign={{base:"center",lg:"center"}}
                color="#ffff"
                
                >Skills</Heading>
                <Text
                textAlign={'center'}
                mt="2"
                w={'30%'}
                >
                    Tools and Practices for Growth and Mastery.Skills are the seeds of growth; with each new skill, we nourish the garden of our potential.
                </Text>
           </Flex>
            <Flex
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
            </Flex>
        </Box>
     );
}
 
export default Skills;