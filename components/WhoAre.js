import { Box, Flex, Text, Button, Img } from "@chakra-ui/react";
import Link from "next/link";

const WhoAre = () => {
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
                    <Flex direction={{ base: 'column', md: 'row' }} p={5} align={'center'}
                        borderRadius={'20px'} w={{ base: '100%', md: '100%' }} >
                        <Box w={{ base: '180px',md:'550px',  lg: '550px' }}>
                            <Img src='/smleft.png' alt="" width={'100%'}  objectFit={'contain'} />
                        </Box>
                        <Box align={'center'} >
                            <Text align={'center'} wordBreak={'none'} borderBottom={'1px solid red'}
                                fontSize={{ base: '24px', md: '28px', lg: '32px' }}
                                _hover={{ color: 'CadetBlue', borderBottom: '1px solid black' }}
                                width="fit-content" marginX={'auto'} fontFamily={'sans-serif'}
                                style={{ letterSpacing: '3px', wordSpacing: '5px' }}>
                                WHO ARE WE?
                            </Text>
                            <Text  lineHeight={'40px'} fontFamily={'sans-serif'} align={'center'}
                                fontWeight={'hairline'} mt={'35px'} fontSize={{ base: '25', lg: '30' }}
                                w={{ base: '100%', lg: '80%' }}>A team of<strong>  IItians </strong>with great passion 
                                for <strong>  branding, advertising & digital marketing </strong>  at your service! 
                                The <strong> Schoollog  </strong>way is a promise of nourishment for your brand!
                            </Text>
                        </Box>
                        <Box w={{ base: '180px',md:'550px', lg: '550px' }}><Img src='/wrwright.png'
                            alt="" width={'100%'} objectFit={'contain'} />
                        </Box>
                    </Flex>
                </Flex>
                <Box align='center'  mb={'40px'} >
                    <Button backgroundColor={'white'} fontFamily={"['Montserrat, sans-serif']"} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'} align='center'  >
                        <Link href="/ReadMore">
                        Subscribe Now
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default WhoAre;