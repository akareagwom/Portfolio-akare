import { Box, Card, CardBody, SimpleGrid, Text , Image} from "@chakra-ui/react";
import {Project} from '../api/data';
import {FrameWork} from '../api/frame_work'

const Partner = () => {
    return ( 
        <Box
        mt="5%"
        mb="5%"
        >
            
            <SimpleGrid
             columns={{base:1,lg:3}}
             spacing={3}
             px="6%"
             //  gap={0.5}
             columnGap={3}
             >
             {FrameWork.map((framework) =>
               <Box
                key={framework.id}
               border="2px solid #08830D"
               borderStyle="dashed"
               borderRadius="20px"
               w="100%"
               color="white">
               <Card
                p="2%"
                bg="black"
                borderRadius="20px"
                w={{lg:'80%'}}
                pos="relative"
                
                >
                    <CardBody>
                        <Box
                        textAlign={'center'}
                        filter='auto'
                        // brightness={'50%'}
                        w={{base:"100%",lg:"100%"}}
                        h={'25vh'}
                        _hover={{ visibility:'hidden'}}
                        display={'block'}>
                        <Image alt="assets" _hover={{ display:'none'}} borderRadius={'50%'} w={'40%'} src={framework.img} />
                        </Box>
                        
                        <Box
                        pos={'absolute'}
                        top="15"
                        left="0"
                        pl="10"
                        _hover={{opacity: 5}}
                        transition ={'top 0.3s ease'}
                        bg="rgba(0,0,0,0.6)"
                        opacity="0"
                        >
                        <Text color="white">
                        {framework.desc}
                        </Text>
                        </Box>
                    </CardBody>

                </Card>
               </Box>
            )}
            </SimpleGrid>
        </Box>
     );
}
 
export default Partner;