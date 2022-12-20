import { Box, Flex, Text, Heading, HStack, Button, Center, Img } from "@chakra-ui/react";
import Link from "next/link";

const WebDesign = () => {

    return (
        <Box backgroundColor={'white'} py={'10px'} id={'WebDesign'}>
            <Box mt={'40px'} id={'../components/....'} >
                <Flex align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    <Flex direction={{ base: 'column', md: 'row' }} p={5} align={'center'}
                        borderRadius={'20px'} w={{ base: '100%', md: '100%' }} >
                        <Box  w={{ base: '180px', md: '300px',lg:'500px' }}><Img src='/wdleft.png'
                            alt="" width={'100%'} h={'100%'} objectFit={'contain'} />
                        </Box>
                        <Box align={'center'} w={{ base: '100%', md: '100%' }}>
                            <Text fontFamily={'sans-serif'} align={'center'} borderBottom={'1px solid red'}
                                fontSize={{ base: '24px', md: '28px', lg: '32px' }}
                                _hover={{ color: 'CadetBlue', borderBottom: '1px solid black' }}
                                width="fit-content" marginX={'auto'}
                                style={{ letterSpacing: '3px', wordSpacing: '5px' }}>
                                WEB DESIGN
                            </Text>
                            <Text lineHeight={'40px'} fontFamily={"['Montserrat, sans-serif']"} color={'#33334d'}
                                mt={'20px'} fontSize={{ base: '25', lg: '32' }} w={{ base: '100%', lg: '85%' }}>
                                Because we bet that your target customer would be Googling for your service
                                right now and just clicked in your competitor&apos;s website
                                link while we can set up an <strong>attractive website for you</strong> and
                                drive your targets in making a  <strong> BOOM in your business!</strong>
                            </Text>
                        </Box>
                        <Box w={{ base: '180px', md: '300px',lg:'500px' }}>
                            <Img src='/wdright.png' alt="" width={'100%'}  objectFit={'contain'} />
                        </Box>
                       
                    </Flex>
                </Flex>
                <Box align='center' mb={'50px'} >
                    <Button backgroundColor={'white'} fontFamily={"['Montserrat, sans-serif']"} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'} align='center'  >
                        <Link href="/ReadMore">READ MORE </Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default WebDesign;