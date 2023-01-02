import { Box, Img } from "@chakra-ui/react";

const BreakDesign = () => {
    return (
        <Box
            h={'60px'}
            align="center"
            bgColor={'#001a33'}
        >
            <Img src='/middleones.png' alt="" objectFit={'cover'} h={'100%'} w={'220px'} />
        </Box>
    );
}

export default BreakDesign;