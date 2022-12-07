import { Box, Flex, Text, Heading, HStack, Button, Center, Img } from "@chakra-ui/react";
import Link from "next/link";
import styles from '../styles/Home.module.css'
// import '../styles/textDecoration.css'

const GraphicDesign = () => {
    return (
        <Box backgroundColor={'white'} py={'30px'} id={'GraphicDesign'}>
            <Box mt={'30px'} id={'../components/....'} >
                <Flex mt={4} align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    <Flex direction={{ base: 'column', md: 'row' }} p={5} align={'center'} borderRadius={'20px'} w={{ base: '100%', md: '100%' }} >
                        <Box w={{ base: '250px', md: '500px' }} ><Img src='/graphicde.png' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
                        <Box align={'center'} w={{ base: '100%', md: '70%' }}>
                            <Text align={'center'}
                                borderBottom={'1px solid red'}
                                textShadow={'1px 1px #b3cce6'}
                                fontSize={{ base: '24px', md: '28px', lg: '30px' }}
                                // transition={{ borderBottom: '2s' }}
                                _hover={{ color: ' #006680', borderBottom: '1px solid black', textDecoration: 'underline' }}
                                width="fit-content"
                                marginX={'auto'}
                                fontFamily={'sans-serif'}
                                style={{ letterSpacing: '3px', wordSpacing: '5px' }} >GRAPHIC DESIGN</Text>
                            <Text
                                lineHeight={'40px'}
                                style={{ letterSpacing: '0px', wordSpacing: '2px' }}
                                fontFamily={"['Montserrat, sans-serif']"}
                                mt={'40px'}
                                fontWeight={'hairline'}
                                fontSize="30px"
                                w={{ base: '100%', lg: '85%' }}
                            >Because <strong >never underestimate</strong> the power of an <strong> attractive & well communicative image or design!</strong> Just never! This generation is all about visuals!
                            </Text>
                        </Box>
                        <Box w={{ base: '250px', md: '500px' }}><Img src='/graphicdesign1.png' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
                    </Flex>
                </Flex>
                <Box align='center' mb={'30px'}>
                    <Button backgroundColor={'white'} fontFamily={'sans-serif'} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'} align='center'  >
                        <Link href="/ReadMore">READ MORE</Link>
                    </Button>
                </Box>
            </Box>
        </Box >
    );
}

export default GraphicDesign;