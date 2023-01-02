import { Box, Flex, Text, Heading, HStack, Button, Center, Img, Image } from "@chakra-ui/react";
import Link from "next/link";

const WhoAreWe = () => {
    const about = [
        {
            data: 'Team of IITIANS',
            color: '#c8cae3',
            bg: 'backgroundImage: `url(digital700schools.jpg)`'
        },
        {
            data: 'Experience of working with leading edtech brands',
            color: '#c8cae3',
            bg: 'backgroundImage: `url(digital700schools.jpg)`'
        },
        {
            data: '700+ School',
            color: '#c8cae3',
            bg: 'backgroundImage: `url(digital700schools.jpg)`'
        }
    ]

    return (
        <Box backgroundColor={'white'} py={'40px'}>
            <Box id={'AboutUs'} >
                <Text fontFamily={'sans-serif'} fontSize={{ base: '28px', md: '32px', lg: '36px' }}
                    _hover={{ color: 'blue', borderBottom: '1px solid black' }} width="fit-content"
                    marginX={'auto'} style={{ letterSpacing: '2px' }}>WHO ARE WE?
                </Text>
                <Flex mt={10} mx={'1%'} gap={3} flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    {about.map(d => {
                        return (
                            <Box
                                w={'100%'}
                                border={'2px solid #FFFF00'}
                                _hover={{ transform: 'scale(.95)', transition: '3s', }}
                                shadow={'1px 1px 5px -1px'} borderRadius={'20px'}
                                key={d.data}>
                                <Image borderRadius={'20px'} w={'100%'} h={{ base: '200px', lg: '240px' }}
                                    objectFit={'cover'} src="bg5.jpg" alt='' />
                            </Box>
                        )
                    })}
                </Flex>
                <Box align='center' mt={'30px'}>
                    <Button backgroundColor={'white'} fontFamily={"['Montserrat, sans-serif']"}
                        border={'1px solid gray'} size={'sm'}
                        _hover={{ color: 'white', backgroundColor: 'black', }}
                        borderRadius={'20px'} px={'25px'} align='center'  >
                        <Link href="/ReadMore">
                            READ MORE
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default WhoAreWe;
