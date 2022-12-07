import { Box, Divider, Flex, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

const CorePeople = () => {

    const Gallery = [
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
        {
            image: 'https://bit.ly/dan-abramov',
            Name: 'SUNIL KUMAR KUMAWAT',
            Position: 'Front-end Developer'
        },
    ]

    return <Box>

        <Flex mt={'50px'} justify={'center'}>
            <Divider w={{ base: '50px', md: '200px', lg: '200px' }} mt={'16px'} />
            <Text color={'#6f6f6f'} lineHeight={'30px'} fontFamily="['Montserrat, sans-serif']" fontSize={{ base: '20px', md: '25', lg: '30px' }} >
                OUR CORE PEOPLE
            </Text>
            <Divider w={{ base: '50px', md: '200px', lg: '200px' }} mt={'16px'} />
        </Flex>
        <Wrap spacing='100px' mx={'150px'} my={'70px'}>
            {Gallery.map((e) => {
                return (
                    <WrapItem key="{e.Name}">
                        <Box align={'center'} >
                            <Image
                                borderRadius='full'
                                border={'5px solid gray'}
                                boxSize='180px'
                                src={e.image}
                                alt='Dan Abramov'
                            />
                            <Text mt={'20px'} fontSize={'14px'}>{e.Name}</Text>
                            <Text fontSize={'14px'}>{e.Position}</Text>
                        </Box>
                    </WrapItem>
                )
            })}
        </Wrap>

    </Box>
}

export default CorePeople;