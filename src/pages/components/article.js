import { Box, Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";

const Article = () => {
    return ( 
        <>
        <Box>
            <Card variant={'unstyled'} bg={'#DEB992'} w={{base:'80%',md:'95%'}} m={{base:'10%',md:'7%'}} >
                <Image src="preview.jpg" filter='auto' borderTopRadius={'3%'} brightness='20%' />
                <CardHeader textAlign={'center'}>
                    Project
                </CardHeader>
                <Text textAlign={'center'}>blah blah blah blah blah blah blah blah blah</Text>
                <CardBody color={'black'} display='flex' justifyContent='space-around'>
                    
                    <Text>
                        preview
                    </Text>
                    <Text>
                        live
                    </Text>
                </CardBody>
            </Card>
        </Box>
        </>
     );
}
 
export default Article;