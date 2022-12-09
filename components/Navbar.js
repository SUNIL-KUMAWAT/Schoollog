
import { Box, Image, Img, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



const Navbar = () => {

  const items = [

    <Image w={'100%'} maxH={'600px'} minH={'220px'} position={'relative'} zIndex={-1} className="item" data-value="1" src='/DigitalMarketingFrontPic.jpg' key="1" alt="" role="presentation" />,
    <Image w={'100%'} maxH={'600px'} minH={'220px'} zIndex={-1} className="item" data-value="2" src='nav.jpg' key="2" alt="" role="presentation" />,
    <Image w={'100%'} maxH={'600px'} minH={'220px'} zIndex={-1} className="item" data-value="2" src='/DigitalMarketingFrontPic.jpg' key="2" alt="" role="presentation" />,

  ];
  //   const responsive = {
  //     0: { items: 1 },
  //     512: { items: 2 },
  //     1024: { items: 3 },

  // };

  return (
    <Box>
      <Box w={'100%'}>
        <AliceCarousel paddingLeft disableButtonsControls autoPlay animationDuration={'40000'} disableDotsControls infinite
          mouseTracking items={items} />
      </Box>
      <Box
        align='center'>
        <Img src="schoollog.png" w={{ base: '160px', md: '240', lg: '300px' }} ></Img>
        <Text fontSize={{ base: '18px', md: '24', lg: '30px' }}  style={{ letterSpacing: '1px', wordSpacing: '1px', }}  color={'white'} fontFamily={'sans-serif'}>Taking your brand seeds to the digital soil</Text>
        <Text fontSize={{ base: '18px', md: '24', lg: '28px' }} color={'white'} mt={'-1%'} fontFamily={'sans-serif'}>&</Text>
        <Text fontSize={{ base: '18px', md: '24', lg: '30px' }} style={{ letterSpacing: '1px', wordSpacing: '1px' }}  color={'white'} mt={'-1%'} fontFamily={'sans-serif'}><b style={{ color: 'skyblue' }}>Schoollog</b> them!</Text>
      </Box>

    </Box>
  )
}
export default Navbar;


/* <Flex mx={10} minWidth='max-content' alignItems='center' justifyContent={"space-between"}>           
           
<Image src='/school.jpg' width={128} height={77} />        
<Flex gap='4'>
    <Link href='/'>Home</Link>
    <Link href='/about'>About</Link>
    <Link href='/DigitalMarket'>DigitalMarket</Link>
</Flex>
</Flex> */
