import { Box, Flex, Text, Heading, HStack, Button, Center, Img } from "@chakra-ui/react";
import Link from "next/link";

const Seo = () => {

    return (
        <Box backgroundColor={'white'} py={'10px'} id={'Seo'}>
            <Box mt={'10px'} id={'../components/....'} >
                <Flex align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    <Flex direction={{ base: 'column', md: 'row' }} p={5} align={'center'} borderRadius={'20px'} w={{ base: '100%', md: '100%' }} >
                        <Box w={{ base: '250px', md: '500px' }}><Img src='/seo1.webp' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
                        <Box align={'center'} w={{ base: '100%', md: '100%' }}>
                            <Text fontFamily={'sans-serif'} align={'center'} borderBottom={'1px solid red'} fontSize={{ base: '24px', md: '28px', lg: '32px' }} _hover={{ color: 'CadetBlue', borderBottom: '1px solid black' }} width="fit-content" marginX={'auto'} style={{ letterSpacing: '3px', wordSpacing: '5px' }}>SEO</Text>
                            <Text lineHeight={'40px'} fontFamily={'sans-serif'} color={'#33334d'} mt={'10px'} fontSize={{ base: '25', lg: '32' }} w={{ base: '100%', lg: '72%' }}>Because the business topper’s website deserves to be on top of the Google results too!  <b>Let’s stuff it with the right keywords!</b>  </Text>
                        </Box>
                        <Box w={{ base: '250px', md: '500px' }}><Img src='/seo.jpg' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
                    </Flex>
                </Flex>
                <Box align='center' mb={'50px'} >
                    <Button backgroundColor={'white'} fontFamily={'sans-serif'} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'} align='center'  >
                        <Link href="/ReadMore">READ MORE</Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Seo;