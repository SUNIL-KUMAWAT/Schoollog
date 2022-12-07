import { Box, Flex, Text, Heading, HStack, Button, Center, Img } from "@chakra-ui/react";
import Link from "next/link";

const SocialMediaMarketing = () => {
    const about = [
        {
            data: 'Team of IITIANS',
            color: '#c8cae3',
        },
        {
            data: 'Because great minds like Zuckerberg gifted us Social Media business tools & not making use of them would be a modern day sin',
            color: '#c8cae3',
        },
        {
            data: '700+ School',
            color: '#c8cae3',
        }
    ]

    return (
        <Box backgroundColor={'white'} py={'10px'} id={'SocialMediaMarketing'}>
            <Box id={'../components/....'} >
                <Flex mt={4} align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>

                    <Flex direction={{ base: 'column', md: 'row' }} p={5} align={'center'} borderRadius={'20px'} w={{ base: '100%', md: '100%' }} >
                        <Box w={{ base: '250px', md: '400px' }}><Img src='/socialmedia.png' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
                        <Box align={'center'} w={{ base: '100%', md: '100%' }}>
                            <Text align={'center'} borderBottom={'1px solid red'} fontSize={{ base: '24px', md: '28px', lg: '32px' }} _hover={{ color: 'CadetBlue', borderBottom: '1px solid black' }} width="fit-content" marginX={'auto'} fontFamily={'sans-serif'} style={{ letterSpacing: '3px', wordSpacing: '5px' }}>SOCIAL MEDIA MARKETING</Text>
                            <Text lineHeight={'40px'} fontFamily={'sans-serif'} fontWeight={'hairline'} mt={'35px'} fontSize={{ base: '25', lg: '30' }} w={{ base: '100%', lg: '65%' }}>Because great minds like <b>Zuckerberg</b> gifted us <b> Social Media business tools</b> & not making use of them would be a modern day sin</Text>
                        </Box>
                        <Box w={{ base: '250px', md: '350px' }}><Img src='/imagesection.png' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
                    </Flex>

                </Flex>
                <Box align='center' mt={'-30px'} mb={'40px'} >
                    <Button backgroundColor={'white'} fontFamily={'sans-serif'} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'} align='center'  >
                        <Link href="/ReadMore">READ MORE</Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default SocialMediaMarketing;