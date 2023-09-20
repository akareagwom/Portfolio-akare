import { Box, Card, CardBody, SimpleGrid, Text } from "@chakra-ui/react";
import {Project} from '../api/data';

const Partner = () => {
    return ( 
        <Box
        mt="5%"
        mb="5%"
        >
            {Project.map((project) =>
            
            <SimpleGrid
             columns={{base:1,lg:3}}
             spacing={3}
             px="6%"
             key={project.id}
            //  gap={0.5}
             columnGap={3}
             >
               <Box
               border="2px solid #08830D"
               borderStyle="dashed"
               borderRadius="20px"
               w="100%"
               color="white">
               <Card
                p="8%"
                bg="black"
                borderRadius="20px"
                
                >
                    <CardBody>
                        <Text color="white">
                        {project.desc}
                        </Text>
                    </CardBody>
                </Card>
               </Box>
            </SimpleGrid>
            )}
        </Box>
     );
}
 
export default Partner;