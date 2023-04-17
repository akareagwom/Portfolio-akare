import { Box, Heading, TabList, Tabs,Tab, Flex } from "@chakra-ui/react";

const Nav = () => {
    return ( 
        <>
            <Flex fontFamily={'sans-serif'} background={'#051622'} justify={'space-between'}>
                <Box>
                <Heading fontSize={'1.5rem'} color='#DEB992' fontFamily={'Gruppo'} >Akare</Heading>
                </Box>
                <Tabs variant={'unstyled'}>
                    <TabList color='#1BA098'>
                        <Tab _selected={{color:'#DEB992',borderBottomColor:'#DEB992'}}>Home</Tab>
                        <Tab _selected={{color:'#DEB992',borderBottomColor:'#DEB992'}}>About</Tab>
                        <Tab _selected={{color:'#DEB992',borderBottomColor:'#DEB992'}}>Project</Tab>
                        <Tab _selected={{color:'#DEB992',borderBottomColor:'#DEB992'}}>Contact</Tab>
                    </TabList>
                </Tabs>
            </Flex>
        </>
     );
}
 
export default Nav;