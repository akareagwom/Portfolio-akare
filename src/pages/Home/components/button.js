import { Box,Button } from "@chakra-ui/react"
import { MdArrowForward } from "react-icons/md";

const Buttoned =()=>{
    return(
        <Box ml={'9%'} mb={10} color='black'>
            <Button py={7} borderRadius={'0px'}  w={'300px'} bg={'gray.200'} variant={'none'}>
                <MdArrowForward/>
                Contact Me
            </Button>
        </Box>
    )
}

export default Buttoned;