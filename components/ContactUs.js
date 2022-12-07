import { Box, Flex, Text, Heading, HStack, Button, Center, Img } from "@chakra-ui/react";
import Link from "next/link";

const ContactUs = () => {

    return (
        <Box backgroundColor={'white'} py={'10px'} id={'Contactus'} >
            <Box mt={'10px'} id={'../components/....'} >
                <Flex align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    <Flex direction={{ base: 'column', md: 'row' }} p={5} align={'center'} borderRadius={'20px'} w={{ base: '100%', md: '100%' }} >
                        <Box w={{ base: '250px', md: '500px' }}><Img ml={{ base: '10px', md: '10px', lg: '40px' }} src='/contact.jpg' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
                        <Box align={'center'} w={{ base: '100%', md: '90%' }}>
                            <Text fontFamily={'sans-serif'} lineHeight={'40px'} ml={{ base: '10px', md: '10px' }} align={'left'} style={{ letterSpacing: '1px', wordSpacing: '2px' }} color={'#33334d'} mt={'10px'} fontSize={{ base: '24', lg: '30' }} w={{ base: '100%', lg: '62%' }}>Sometimes from the most <b> twisty or stupid thought, </b>sometimes <b>simply out of commonsense,</b> we bring out the <b>best ideas</b> from our brains! It’s all about<b> brainstorming</b> just to get the simplest thought! </Text>
                        </Box>
                    </Flex>
                </Flex>
                <Box align='center' mb={'50px'} >
                    <Button backgroundColor={'white'} fontFamily={'sans-serif'} border={'1px solid gray'} size={'sm'} bgColor={'black'} color={'white'} _hover={{ color: 'black', backgroundColor: 'white' }} borderRadius={'20px'} px={'25px'} align='center'  >
                        <Link href={'/#Footer'} passHref>CONTACT US</Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactUs;