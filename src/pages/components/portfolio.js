import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text  } from "@chakra-ui/react";
import Article from "./article";

import {Project} from '../api/data'
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
            color="#ffff"
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
                        <Box>

                            <NextLink href={`/project/${item.id}`} passHref>
                            <Image src={item.image}/>
                            </NextLink>
                        </Box>
                    ))}

                    {/* <Article /> */}
                </Box>

            

        </Box>
     );
}
 
export default Portfolio;