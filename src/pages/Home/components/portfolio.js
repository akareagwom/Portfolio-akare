import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text  } from "@chakra-ui/react";
import Article from "./article";

import {Project} from '../../api/data'
import NextLink from 'next/link'

const Portfolio = () => {
    return ( 
        <Box
        id="portfolio"
        mb={{base:'10%',lg:'5%'}}
        mt={{base:'10%',lg:'5%'}}
        >
            <Heading
            fontSize="26px"
            textAlign={{base:"center",lg:"start"}}
            color="#000"
            ml="6%"
            >
               Recent Project
            </Heading>
           
                <Box
                display={{base:'block',lg:'flex'}}
                flexDir={{ base:'cloumn',lg:'row'}}
                justifyContent={{base:'center',lg:'space-between'}}
                >
                    {Project.map((item,index)=>(
                        <Box
                        key={index}
                        // bg={'black'}
                        // brightness={'20%'}
                        // m={8}
                        borderRadius={10}
                        // opacity={'40%'}
                        // flexDir={'column'}

                        px={{base:'8'}}
                        py={{base:'4'}}
                        pos={'relative'}
                        >

                            <NextLink href={item.url} passHref >
                            <Image
                            alt="assets"
                            filter='auto'
                            brightness={'50%'}
                            pos={'center'} 
                            objectFit={'cover'}
                            boxSize={'100%'}
                            w={{base:'398px'}} 
                            h={{base:'282px'}}  
                            src={item.image}/>
                            <Text pos={'absolute'}  top={10} color={'white'}>{item.desc.slice(0,3)}</Text>
                            </NextLink>
                        </Box>
                    ))}

                    {/* <Article /> */}
                </Box>

            

        </Box>
     );
}
 
export default Portfolio;