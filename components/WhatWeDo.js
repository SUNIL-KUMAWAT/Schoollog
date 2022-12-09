import { Box, Text } from "@chakra-ui/react";

const WhatWeDo = () => {
    return (
        <Box align={'center'} py={'40px'} >
            <Text color={'white'} fontFamily={'serif'} fontSize={'30px'}
                style={{ letterSpacing: '2px' }} ><b>WHAT WE DO?</b>
            </Text>
            <Text color={'white'} fontFamily={'sans-serif'} fontSize={'28px'}
                style={{ wordSpacing: '6px', letterSpacing: '1px' }} >
                <b>Our services at a gentle click! </b>
            </Text>
        </Box>
    );
}

export default WhatWeDo;