import { Box, Flex, Text, Heading, HStack, Button, Center, Img } from "@chakra-ui/react";

const Experience = () => {

    return (
        <Box backgroundColor={'white'} py={'10px'}>
            <Box mt={'10px'} id={'../components/....'} >
                <Flex align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    <Flex direction={{ base: 'column', md: 'row' }} p={5} align={'center'}
                        borderRadius={'20px'} w={{ base: '100%', md: '100%' }} >
                        <Box w={{ base: '180px', md: '400px' }}><Img src='/eleft.png'
                            alt="" width={'100%'} h={'100%'} objectFit={'contain'} />
                        </Box>
                        <Box align={'center'} w={{ base: '100%', md: '100%' }}>
                            <Text lineHeight={'40px'} fontFamily={"['Montserrat, sans-serif']"}
                                color={'#33334d'} mt={'10px'} fontSize={{ base: '25', lg: '30' }}
                                w={{ base: '100%', lg: '75%' }}>Our secret? <strong>9 years of experience
                                </strong> & a highly passionate team with rainbow like brains!
                            </Text>
                            <Text fontFamily={'sans-serif'} fontSize={'32px'} mt={'35px'}>
                                <strong>We know what we do!</strong></Text>
                            <Text fontFamily={'sans-serif'} fontSize={'32px'}>
                                <strong>We love what we do!</strong>
                            </Text>
                        </Box>
                        <Box w={{ base: '180px', md: '400px' }}><Img src='/eright.png' alt=""
                            width={'100%'} h={'100%'} objectFit={'contain'} />
                        </Box>
                    </Flex>
                </Flex>
                <Box align='center' mb={'50px'} >
                    <Button bgColor={'black'} color={'white'} fontFamily={"['Montserrat, sans-serif']"}
                        border={'1px solid gray'} size={'sm'} fontSize={12} _hover={{ color: 'black', backgroundColor: 'white' }}
                        borderRadius={'20px'} px={'25px'} align='center' style={{ letterSpacing: '1px', wordSpacing: '3px' }}  >
                        FEEDBACK & QUERY BOX!
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Experience;