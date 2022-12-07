import { Box, Text } from "@chakra-ui/react";

const WhatWeDo = () => {
    return (
        <Box align={'center'} py={'40px'} >
            <Text color={'white'} fontFamily={'sans-serif'} fontSize={'18px'} style={{ letterSpacing: '2px' }} ><b>WHAT WE DO?</b></Text>
            <Text color={'white'} fontFamily={'sans-serif'} fontSize={'32px'} style={{ wordSpacing: '6px' }} ><b>Our services at a gentle click! </b></Text>
        </Box>
    );
}

export default WhatWeDo;