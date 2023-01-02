import { Box, Flex, Heading } from "@chakra-ui/react";

const OurServices = () => {
    const about = [
        {
            data: 'Social Media Marketing',
            color: '#c8cae3',
        },
        {
            data: 'Paid Advertisement',
            color: '#c8cae3',
        },
        {
            data: 'SEO',
            color: '#c8cae3',
        },
        {
            data: 'Content Marketing',
            color: '#c8cae3',
        },
    ]

    return (
        <Box id={'OurClient'}>
            <Box mx={'5%'} mt={5} id={'../components/OurServices'} scrollMargin={'100px'} >
                <Heading as={'h1'}>Our Services</Heading>
            </Box>
            <Flex mt={5} mx={'5%'} gap={3} justifyContent="center" align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                {about.map(d => {
                    return (
                        <Box _hover={{ transform: 'scale(1.05)' }} p={5} align={'center'} borderRadius={'20px'} key={d.data} w={{ base: '100%', md: '100%' }} h={'250px'} bg={d.color}>
                            {d.data}
                        </Box>
                    )
                })}
            </Flex>
        </Box>
    );
}

export default OurServices;