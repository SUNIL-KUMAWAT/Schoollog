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
                                 border={'2px solid #ffff4d'}
                                _hover={{ transform: 'scale(.95)', transition: '3s', }}
                                shadow={'1px 1px 5px -1px'} borderRadius={'20px'}
                                key={d.data} w={{ base: '100%', md: '100%' }}  >
                                <Image borderRadius={'20px'}  h={'240px'} src="bg.jpg" alt='' />
                            </Box>
                        )
                    })}
                </Flex>
                <Box align='center' mt={'30px'}>
                    <Button backgroundColor={'white'} fontFamily={'sans-serif'} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'} align='center'  >
                        <Link href="/ReadMore">READ MORE</Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default WhoAreWe;



// <Box fontSize={'32px'} fontFamily={'monospace'} color='forestgreen'
//                                 bgGradient={[
//                                     'linear(to-tr, teal.100, yellow.300)',
//                                     'linear(to-t, blue.100, teal.100)',
//                                     'linear(to-b, orange.100, purple.100)',
//                                 ]} _hover={{ transform: 'scale(.95)', transition: '3s', bgGradient: 'linear(to-r, red.100, yellow.200)', color: 'black' }}
//                                 shadow={'1px 1px 5px -1px'} p={5} align={'center'} borderRadius={'20px'}
//                                 key={d.data} w={{ base: '100%', md: '100%' }} h={'250px'}
//                                 // style={{backgroundImage: {d.backgroundImage}}
//                                 >
//                                {d.data}
//                                <Image>
//                             </Box>