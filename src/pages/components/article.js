import { Box, Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";

const Article = () => {
    return ( 
        <>
        <Box>
            <Card bg={'#1BA098'} w={'80%'} display={'block'} m={'10%'} >
                <Image src="preview.jpg" filter='auto' brightness='20%' />
                <CardHeader textAlign={'center'}>
                    Project
                </CardHeader>
                <CardBody color={'#DEB992'} display='flex' justifyContent='space-around'>
                    
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