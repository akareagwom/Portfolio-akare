import { Box, Card, CardBody, CardHeader, Heading, Image, Text  } from "@chakra-ui/react";
import Article from "./article";

const Portfolio = () => {
    return ( 
        <Box
        id="portfolio"
        mb={'5%'}
        mt={'5%'}
        >
            <Heading
            fontSize="26px"
            textAlign={{base:"center",lg:"start"}}
            color="#ffff"
            ml="6%"
            >
                Portfolio
            </Heading>
            <Box
            display={{lg:'flex'}}
            pl={{lg:"5%"}}
            py={{lg:"6%"}}
            // flexWrap={'wrap'}
            >
                <Box
                borderTop={'4px solid #08830D'}
                borderLeft={'4px solid #08830D'}
                mt="-2"
                // w={'2'}
                w={'10'}
                h='10'
                p='2'
                >

                </Box>
            <Article/>
            <Article/>
            <Article/>
            <Article/>

            </Box>
            <Box
                borderBottom={'4px solid #08830D'}
                borderRight={'4px solid #08830D'}
                // w={'2'}
                ml='93%'
                mt='-24'
                w={'10'}
                h='10'
                p='2'
                >

                </Box>

        </Box>
     );
}
 
export default Portfolio;