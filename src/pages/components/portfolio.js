import { Box, Card, CardBody, CardHeader, Heading, Image, Text  } from "@chakra-ui/react";
import Article from "./article";

const Portfolio = () => {
    return ( 
        <Box
        id="portfolio"
        >
            <Heading
            fontSize="26px"
            textAlign={{base:"center",lg:"start"}}
            color="#ffff"
            ml="6%"
            >
                Portfolio
            </Heading>
            <Article/>
            <Article/>
            <Article/>
            <Article/>

        </Box>
     );
}
 
export default Portfolio;