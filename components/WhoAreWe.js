import { Box, Flex, Text, Heading, HStack, Button, Center } from "@chakra-ui/react";
import Link from "next/link";

const WhoAreWe = () => {
    const about = [
        {
            data: 'Team of IITIANS',
            color: '#c8cae3',
        },
        {
            data: 'Exprience of working with leading edtech brands',
            color: '#c8cae3',
        },
        {
            data: '700+ School',
            color: '#c8cae3',
        }
    ]

    return (
        <Box backgroundColor={'white'} py={'40px'}>
            <Box id={'AboutUs'} >
                <Text fontFamily={'sans-serif'} fontSize={{ base: '28px', md: '32px', lg: '36px' }} _hover={{ color: 'blue', borderBottom: '1px solid black' }} width="fit-content" marginX={'auto'} style={{ letterSpacing: '2px' }}>WHO ARE WE?</Text>
                {/* <hr style={{width:'260px',margin:'auto', borderTop: '3px solid blue', marginTop:'-8px'}} />          */}
                <Flex mt={10} mx={'1%'} gap={3} justifyContent="center" align="center" flexDir={{ base: "column", md: "row", lg: 'row' }}>
                    {about.map(d => {
                        return (
                            <Box fontSize={'32px'} fontFamily={'sans-serif'} color='forestgreen' bgGradient={[
                                'linear(to-tr, teal.300, yellow.400)',
                                'linear(to-t, blue.200, teal.500)',
                                'linear(to-b, orange.100, purple.300)',
                            ]} _hover={{ transform: 'scale(.95)', transition: '3s', bgGradient: 'linear(to-r, red.500, yellow.500)', color: 'black' }} shadow={'2px 2px 10px 1px '} p={5} align={'center'} borderRadius={'20px'} key={d.data} w={{ base: '100%', md: '100%' }} h={'250px'} >
                                {d.data}
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