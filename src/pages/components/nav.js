import { Box, Heading, TabList, Tabs,Tab, Flex } from "@chakra-ui/react";

const Nav = () => {
    return ( 
        <>
            <Flex fontFamily={'sans-serif'}  justify={'space-between'}>
                <Box>
                <Heading fontSize={'1.5rem'} color='#000' fontFamily={'Gruppo'} >Akare</Heading>
                </Box>
                <Tabs variant={'unstyled'}>
                    <TabList color='#000'>
                        <Tab _selected={{color:'#9EC2FF',borderBottomColor:'#9EC2FF'}}>Home</Tab>
                        <Tab _selected={{color:'#9EC2FF',borderBottomColor:'#9EC2FF'}}>About</Tab>
                        <Tab _selected={{color:'#9EC2FF',borderBottomColor:'#9EC2FF'}}>Project</Tab>
                        <Tab _selected={{color:'#9EC2FF',borderBottomColor:'#9EC2FF'}}>Contact</Tab>
                    </TabList>
                </Tabs>
            </Flex>
        </>
     );
}
 
export default Nav;