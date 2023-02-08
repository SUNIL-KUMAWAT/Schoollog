import { Box, Flex, Text, Button, Img } from "@chakra-ui/react";
import Link from "next/link";

const GraphicDesign = () => {
    return (
        <Box backgroundColor={'white'} py={'30px'} id={'GraphicDesign'}>
            <Box mt={'30px'} id={'../components/....'} >
                <Flex mt={4} align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    <Flex direction={{ base: 'column', md: 'row' }} p={5} align={'center'} borderRadius={'20px'}
                        w={{ base: '100%', md: '100%' }} >
                        <Box w={{ base: '160px', md: '200px', lg: '320px' }} ><Img src='/gdleft.png' alt="" width={'100%'}
                            h={'100%'} objectFit={'contain'} />  </Box>
                        <Box align={'center'} w={{ base: '100%', md: '70%' }}>
                            <Text
                                fontFamily={'sans-serif'} align={'center'} borderBottom={'1px solid red'}
                                fontSize={{ base: '24px', md: '28px', lg: '32px' }}
                                _hover={{ color: 'CadetBlue', borderBottom: '1px solid black' }}
                                width="fit-content" marginX={'auto'}
                                style={{ letterSpacing: '3px', wordSpacing: '5px' }} >GRAPHIC DESIGN</Text>
                            <Text
                                lineHeight={'40px'}
                                style={{ letterSpacing: '0px', wordSpacing: '2px' }}
                                fontFamily={"['Montserrat, sans-serif']"}
                                mt={'40px'}
                                fontSize={{ base: '25', md: '26', lg: '30' }}
                                w={{ base: '100%', lg: '70%' }}>
                                Get access to the <strong> best design </strong> which gets resonated with your brand identity. 
                                Our team will make sure your brand looks <strong> the best on the internet </strong>
                            </Text>
                        </Box>
                        <Box w={{ base: '160px', md: '200px', lg: '320px' }}>
                            <Img src='/gdright.png' alt=""
                                width={'100%'} h={'100%'} objectFit={'contain'} />
                        </Box>
                    </Flex>
                </Flex>
                
                <Box align='center' mb={'30px'}>
                    <Button backgroundColor={'white'} fontFamily={"['Montserrat, sans-serif']"} border={'1px solid gray'}
                        size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'}
                        px={'25px'} align='center'  >
                        <Link href="/ReadMore">Subscribe Now</Link>
                    </Button>
                </Box>
            </Box>
        </Box >
    );
}

export default GraphicDesign;