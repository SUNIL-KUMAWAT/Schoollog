import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react"
import Link from "next/link";
import { Divider } from '@chakra-ui/react'
import Footer from "../components/Footer";
import Form from "../components/Form";


const Testimonials = () => {
    const testimonial = [
        {
            image: 'https://bit.ly/dan-abramov',
            Comments: 'We appreciated madison/miles media&nbsp;s flexibility and attention to detail throughout the process of designing and developing our new website. m3 was consistently dedicated to problem-solving and successfully delivering the features we requested.',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Director of Marketing, Eastern Dental'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Comments: 'We appreciated madison/miles media&nbsp;s flexibility and attention to detail throughout the process of designing and developing our new website. m3 was consistently dedicated to problem-solving and successfully delivering the features we requested.',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Director of Marketing, Eastern Dental'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Comments: 'We appreciated madison/miles media&nbsp;s flexibility and attention to detail throughout the process of designing and developing our new website. m3 was consistently dedicated to problem-solving and successfully delivering the features we requested.',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Director of Marketing, Eastern Dental'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Comments: 'We appreciated madison/miles media&nbsp;s flexibility and attention to detail throughout the process of designing and developing our new website. m3 was consistently dedicated to problem-solving and successfully delivering the features we requested.',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Director of Marketing, Eastern Dental'
        },
    ]

    return <Box id={'testimonials'} align={'center'}>
        <Box w={'100%'} ><Img src='/nav.jpg' alt="" width={'100%'} h={'100%'} objectFit={'contain'} />  </Box>
        <Text fontWeight={'hairline'} fontSize={'40px'} mt={'20px'} style={{ wordSpacing: '2px', letterSpacing: '2px' }}>
            Testimonials
        </Text>
        <Text mt={'30px'} fontWeight='hairline' fontSize={{ base: '24px', lg: '30px' }} mx={{ base: '10px', md: '100px', lg: '200px' }}>
            The right feedbacks help us grow. The kind compliments keep us motivated.
            At the end of the day, the words from our clients matter the most!
        </Text>

        {testimonial.map((d, index) => (<>
            <Divider key={index} borderWidth={'2px'} variant={'dashed'} borderColor={'gray.200'} my={'25px'} />
            <Flex border={'1px solid black'} p={'10px'} backgroundColor={'#FBFFFF'}
                key={index} align={'center'}
                flexDir={index % 2 === 0 ? 'row' : 'row-reverse'} wrap={'wrap'}
                w={{ base: '100%', md: '80%', lg: '70%' }}
                marginX={{ base: '1px', md: '10%', lg: '10%' }}
                mt={'50px'}
                borderTop={'40px solid transparent'}
                borderBottom={'40px solid transparent'}
                borderLeft={'40px solid #B4BBFD'}>
                <Box w={'150px'} marginX={'auto'}>
                    <Img
                        borderRadius='full'
                        border={'5px solid gray'}
                        src={d.image}
                        alt='Dan Abramov'
                    />
                </Box>
                <Box align='justify' mr={'20px'} w={{ base: '100%', md: '70%', lg: '70%' }}  >
                    <Text fontSize={'18px'}>
                        &ldquo;{d.Comments}&rdquo;
                    </Text>
                    <Text mt={'10px'} fontSize={'18px'} fontWeight={'medium'}>
                        {d.Name}
                    </Text>
                    <Text fontSize={'14px'} fontWeight={'medium'}>
                        {d.Position}
                    </Text>
                </Box>
            </Flex>
        </>
        ))}


        {/* // <Divider borderWidth={'2px'} variant={'dashed'} borderColor={'gray.100'} my={'25px'} />
                // <Flex wrap={'wrap'} w={'100%'} marginX={{ base: '20px', md: '10%', lg: '10%' }} mt={'50px'}>
                //     <Box w={'150px'} marginX={{ base: 'auto', md: '20px', lg: '30px' }}>
                //         <Img
                //             borderRadius='full'
                //             border={'5px solid gray'}
                //             src='https://bit.ly/dan-abramov'
                //             alt='Dan Abramov'
                //         />
                //     </Box>
                //     <Box align="left" w={{ base: 'auto', md: '60%', lg: '60%' }}  >
                //         <Text fontSize={'18px'}>&ldquo;We appreciated madison/miles media&nbsp;s flexibility and attention
                //             to detail throughout the process of designing and developing our
                //             new website. m3 was consistently dedicated to problem-solving and
                //             successfully delivering the features we requested.&rdquo;
                //         </Text>
                //         <Text mt={'10px'} fontSize={'18px'} fontWeight={'medium'}>Paul Gruensfelder</Text>
                //         <Text fontSize={'14px'} fontWeight={'medium'}>Director of Marketing, Eastern Dental</Text>
                //     </Box>
                // </Flex>
                // <Divider borderWidth={'2px'} variant={'dashed'} borderColor={'gray.100'} my={'25px'} />
                // <Flex w={'100%'} wrap={'wrap-reverse'} marginX={{ base: '20px', md: '10%', lg: '10%' }} mt={'50px'}>

                //     <Box align="left" w={{ base: 'auto', md: '60%', lg: '60%' }} ml={'20px'} >
                //         <Text fontSize={'18px'}   >&ldquo;We appreciated madison/miles media&nbsp;s flexibility and attention
                //             to detail throughout the process of designing and developing our
                //             new website. m3 was consistently dedicated to problem-solving and
                //             successfully delivering the features we requested.&rdquo;
                //         </Text>
                //         <Text mt={'10px'} fontSize={'18px'} fontWeight={'medium'}>Paul Gruensfelder</Text>
                //         <Text fontSize={'14px'} fontWeight={'medium'}>Director of Marketing, Eastern Dental</Text>
                //     </Box>
                //     <Box w={'150px'} marginX={{ base: 'auto', md: '20px', lg: '30px' }}>
                //         <Img
                //             borderRadius='full'
                //             border={'5px solid gray'}
                //             src='https://bit.ly/dan-abramov'
                //             alt='Dan Abramov'
                //         />
                //     </Box>
                // </Flex>
                // <Divider borderWidth={'2px'} variant={'dashed'} borderColor={'gray.100'} my={'25px'} />
                // <Flex w={'100%'} wrap={'wrap'} marginX={{ base: '20px', md: '10%', lg: '10%' }} mt={'50px'}>
                //     <Box w={'150px'} marginX={{ base: 'auto', md: '20px', lg: '30px' }}>
                //         <Img
                //             borderRadius='full'
                //             border={'5px solid gray'}
                //             src='https://bit.ly/dan-abramov'
                //             alt='Dan Abramov'
                //         />
                //     </Box>
                //     <Box align="left" w={{ base: 'auto', md: '60%', lg: '60%' }}  >
                //         <Text fontSize={'18px'}   >&ldquo;We appreciated madison/miles media&nbsp;s flexibility and attention
                //             to detail throughout the process of designing and developing our
                //             new website. m3 was consistently dedicated to problem-solving and
                //             successfully delivering the features we requested.&rdquo;
                //         </Text>
                //         <Text mt={'10px'} fontSize={'18px'} fontWeight={'medium'}>Paul Gruensfelder</Text>
                //         <Text fontSize={'14px'} fontWeight={'medium'}>Director of Marketing, Eastern Dental</Text>
                //     </Box>
                // </Flex> */}

        <Box bg={'#1c1c1c'} my={'60px'} py={'60px'} align={'center'}>
            <Text color={'white'} mx={{ base: '20px', md: '80px', lg: '190px' }} align={'center'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={'30px'} >
                Thanks for the surprise visit!
            </Text>
            <Button mt={'40px'} align={'center'} backgroundColor={'white'} fontFamily={'sans-serif'} border={'1px solid gray'} size={'sm'} _hover={{ color: 'white', backgroundColor: 'black' }} borderRadius={'20px'} px={'25px'}  >
                <Link href="/">TAKE ME HOME</Link>
            </Button>
        </Box>
        <Footer />
    </Box>

}

export default Testimonials;