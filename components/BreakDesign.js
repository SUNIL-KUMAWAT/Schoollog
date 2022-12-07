import { Box, Img } from "@chakra-ui/react";

const BreakDesign = () => {
    return (
        <Box my={{ base: '1px', md: '10px' }}>
            <Img src='/socialmedia.png' alt="" w={'80px'} marginX={'auto'} />
        </Box>
    );
}

export default BreakDesign;