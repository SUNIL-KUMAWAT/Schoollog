import { Box, Text } from "@chakra-ui/react";

const WhatWeDo = () => {
    return (
        <Box align={'center'} py={'30px'}  bgColor={'#001a33'} >
            <Text color={'white'} fontFamily={"['Montserrat, sans-serif']"} fontSize={'32px'}
                style={{ letterSpacing: '1px' }} ><b>WHAT WE DO?</b>
            </Text>
            <Text color={'white'} fontFamily={'sans-serif'} fontSize={'30px'}
                style={{ wordSpacing: '1px', letterSpacing: '0px' }} >
                <b>Our services at a gentle click! </b>
            </Text>
        </Box>
    );
}

export default WhatWeDo;