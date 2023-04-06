import { Box, Heading, TabList, Tabs,Tab, Flex } from "@chakra-ui/react";

const Nav = () => {
    return ( 
        <>
            <Flex fontFamily={'fantasy'} justify={'space-between'}>
                <Box>
                <Heading>Akare</Heading>
                </Box>
                <Tabs>
                    <TabList>
                        <Tab>Home</Tab>
                        <Tab>About</Tab>
                        <Tab>Project</Tab>
                        <Tab>Contact</Tab>
                    </TabList>
                </Tabs>
            </Flex>
        </>
     );
}
 
export default Nav;