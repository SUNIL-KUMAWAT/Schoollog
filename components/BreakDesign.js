import { Box, Center, Img } from "@chakra-ui/react";

const BreakDesign = () => {
    return (
        <Box      
        h={'60px'} 
        align="center"      
        bgColor={'#001a33'}
        // borderTop={'10px solid transparent'}
        // borderBottom={'10px solid transparent'}
        // borderLeft={'30px solid #FFFF00'}
        // borderRight={'30px solid #FFFF00'}
        // borderRadius={'30px'}
        // borderLeft={{base:'10px solid #FFFF00',lg:'30px double #FFFF00'}}
        // borderRight={{base:'10px solid #FFFF00',lg:'30px dotted  #FFFF00'}}
        >
            <Img src='/middleones.png'  alt="" objectFit={'cover'} h={'100%'} w={'220px'} />
        </Box>
    );
}

export default BreakDesign;