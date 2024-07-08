import Nav from "./nav";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "./topbar";

const Footer =()=>{
    return(
        <Box color={'white'} py={{base:'10'}} bg={'black'}>
            <Nav/>
            {/* <Navbar/> */}
            <Text>hola babes</Text>
        </Box>
    )
}


export default Footer;